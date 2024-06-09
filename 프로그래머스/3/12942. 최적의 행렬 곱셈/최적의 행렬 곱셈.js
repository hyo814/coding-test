function solution(matrix_sizes) {
    const n = matrix_sizes.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // 대각선은 자기 자신이므로 연산이 필요 없다.
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    // chain_length는 부분 행렬의 길이를 의미한다.
    for (let chain_length = 2; chain_length <= n; chain_length++) {
        for (let i = 0; i <= n - chain_length; i++) {
            let j = i + chain_length - 1;
            dp[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                let cost = dp[i][k] + dp[k + 1][j] + 
                           matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }

    return dp[0][n - 1];
}