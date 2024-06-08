function solution(n, money) {
    // DP 배열을 생성하고, n+1 크기만큼 0으로 초기화합니다.
    const dp = Array(n + 1).fill(0);
    // 0원을 만드는 방법은 1가지입니다. (아무 동전도 사용하지 않는 방법)
    dp[0] = 1;

    // 각 동전 종류를 순회합니다.
    for (let coin of money) {
        // 각 금액을 순회합니다.
        for (let amount = coin; amount <= n; amount++) {
            // 현재 금액에서 동전의 금액을 뺀 값을 이전 값에 더해줍니다.
            dp[amount] += dp[amount - coin];
        }
    }

    // 최종적으로 n원을 만드는 방법의 수를 반환합니다.
    return dp[n];
}