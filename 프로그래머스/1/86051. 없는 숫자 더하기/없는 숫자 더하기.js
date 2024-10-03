function solution(numbers) {
    var total = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            total += i;
        }
    }
    return total;
}