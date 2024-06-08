function solution(n, left, right) {
    const result = [];
    
    // left부터 right까지의 값을 계산하여 result 배열에 채웁니다.
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        result.push(Math.max(row, col) + 1);
    }
    
    return result;
}
