function solution(n) {
    const MOD = 1000000007;

    // 초기값 설정
    if (n === 1) return 1;

    let a = 1; // dp[0]
    let b = 1; // dp[1]

    // dp[n] 계산
    for (let i = 2; i <= n; i++) {
        const temp = (a + b) % MOD;
        a = b; // dp[i-2]를 업데이트
        b = temp; // dp[i-1]를 업데이트
    }

    return b; // dp[n]의 값
}

// 예제 입력
console.log(solution(4)); // 출력: 5
console.log(solution(60_000)); // 큰 값 테스트
