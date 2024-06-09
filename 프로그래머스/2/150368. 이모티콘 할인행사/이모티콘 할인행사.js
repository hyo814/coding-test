function solution(users, emoticons) {
    const discountRates = [10, 20, 30, 40];
    let maxSubscribers = 0;
    let maxSales = 0;

    const getAllDiscountCombinations = (arr, n) => {
        if (n === 1) return arr.map(item => [item]);
        const results = [];
        arr.forEach((item, index) => {
            const smallerCombos = getAllDiscountCombinations(arr, n - 1);
            smallerCombos.forEach(combo => {
                results.push([item, ...combo]);
            });
        });
        return results;
    };

    const discountCombinations = getAllDiscountCombinations(discountRates, emoticons.length);

    discountCombinations.forEach(discounts => {
        let subscribers = 0;
        let sales = 0;

        users.forEach(([rate, threshold]) => {
            let userTotal = 0;
            for (let i = 0; i < emoticons.length; i++) {
                if (discounts[i] >= rate) {
                    userTotal += emoticons[i] * (1 - discounts[i] / 100);
                }
            }
            if (userTotal >= threshold) {
                subscribers++;
            } else {
                sales += userTotal;
            }
        });

        if (subscribers > maxSubscribers || (subscribers === maxSubscribers && sales > maxSales)) {
            maxSubscribers = subscribers;
            maxSales = sales;
        }
    });

    return [maxSubscribers, maxSales];
}
