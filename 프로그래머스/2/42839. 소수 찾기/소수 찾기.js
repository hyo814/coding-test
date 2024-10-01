function solution(numbers) {
    const numSet = new Set();

    // 숫자 조합 생성
    const makeCombinations = (prefix, nums) => {
        if (prefix.length > 0) {
            numSet.add(parseInt(prefix));
        }
        for (let i = 0; i < nums.length; i++) {
            makeCombinations(prefix + nums[i], nums.slice(0, i) + nums.slice(i + 1));
        }
    };

    makeCombinations('', numbers);

    // 소수 판별
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // 소수 카운트
    let count = 0;
    numSet.forEach((num) => {
        if (isPrime(num)) {
            count++;
        }
    });

    return count;
}
