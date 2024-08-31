function solution(begin, end) {
    const result = new Array(end - begin + 1).fill(1);

    // 시작 위치가 1일 때 예외 처리: 첫 번째 위치는 항상 0
    if (begin === 1) {
        result[0] = 0;
    }

    for (let i = begin; i <= end; i++) {
        // 숫자 i의 가장 큰 약수를 찾는다 (단, 그 약수는 10,000,000 이하이어야 함)
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                if (i / j <= 10000000) {
                    result[i - begin] = i / j;
                    break;
                }
                if (j <= 10000000) {
                    result[i - begin] = j;
                }
            }
        }
    }

    return result;
}

// 예제 입력
console.log(solution(1, 10)); // 출력: [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
