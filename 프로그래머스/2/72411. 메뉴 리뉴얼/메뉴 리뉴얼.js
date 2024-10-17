function solution(orders, course) {
    const getCombinations = (arr, n) => {
        let results = [];
        if (n === 1) return arr.map(el => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, n - 1);
            const attached = combinations.map(combination => [fixed, ...combination]);
            results.push(...attached);
        });

        return results;
    }

    const result = [];

    course.forEach(courseSize => {
        const menuCount = {};

        orders.forEach(order => {
            const sortedOrder = order.split('').sort();
            const combinations = getCombinations(sortedOrder, courseSize);
            
            combinations.forEach(combo => {
                const key = combo.join('');
                menuCount[key] = (menuCount[key] || 0) + 1;
            });
        });

        const maxCount = Math.max(...Object.values(menuCount).filter(count => count > 1));

        Object.keys(menuCount).forEach(key => {
            if (menuCount[key] === maxCount) {
                result.push(key);
            }
        });
    });

    return result.sort();
}
