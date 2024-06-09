function solution(data, col, row_begin, row_end) {
    // col번째 컬럼의 값을 기준으로 오름차순 정렬
    data.sort((a, b) => {
        if (a[col - 1] !== b[col - 1]) {
            return a[col - 1] - b[col - 1];
        } else {
            return b[0] - a[0]; // 기본키 값 기준 내림차순
        }
    });

    // row_begin부터 row_end까지 각 행에 대해 S_i 계산 후 XOR 연산
    let hashValue = 0;
    for (let i = row_begin - 1; i < row_end; i++) {
        let sum = data[i].reduce((acc, val) => acc + (val % (i + 1)), 0);
        hashValue ^= sum; // XOR 연산
    }

    return hashValue;
}