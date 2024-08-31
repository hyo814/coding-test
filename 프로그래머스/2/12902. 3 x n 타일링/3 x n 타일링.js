function solution(n) {
    const MOD = 1000000007;

    // 초기값 설정
    if (n % 2 !== 0) return 0; // 홀수인 경우는 채울 수 없음

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 가로 길이가 0인 경우는 한 가지 방법
    dp[2] = 3; // 가로 길이가 2인 경우는 세 가지 방법

    // 동적 프로그래밍을 통한 점화식 적용
    for (let i = 4; i <= n; i += 2) {
        dp[i] = (3 * dp[i - 2]) % MOD;
        for (let j = i - 4; j >= 0; j -= 2) {
            dp[i] = (dp[i] + 2 * dp[j]) % MOD;
        }
    }

    return dp[n];
}

// 예제 입력
console.log(solution(4)); // 출력: 11
