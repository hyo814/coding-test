const solution = (n) => {
    const MOD = 1000000007;
    const dp = [0, 1, 3, 10]; // preset: 1, 2, 5, 2, 2, 4, 2, 2, 4, ...
    dp.length = n + 1;

    // prototype: f(i) = 2 * Σ[1 <= j < i - 1] f(j) - f(i - 1) + 3f(i - 3) + 2f(i - 6) + ...
    // formula: f(i) = 2 * Σ[1 <= j < i - 1] f(j) - f(i - 1) + 2 * Σ[1 <= j] f(i - 3j) + f(i - 3) + new pieces

    // sum for sigma to i - 1, `Σ[1 <= j < i - 1] f(j)`
    // sumPer3 for recursive part, ... + 3f(i - 3) + 2f(i - 6) + 2f(i - 9) + ...
    // So, Σ[1 <= j] f(i - 3j)
    const sumPer3 = [10, 1, 3]; // i % 3 === [0, 1, 2]
    let sum = sumPer3.reduceRight((pre, cur) => pre + cur);

    for (let i = 4; i < dp.length; i++) {
        dp[i] =
            (((sum * 2) % MOD) +
                ((sumPer3[i % 3] * 2) % MOD) -
                (dp[i - 1] % MOD) +
                (dp[i - 3] % MOD) +
                (i % 3 ? 2 : 4) + // new pieces: 2, 2, 4, 2, 2, 4, ...
                MOD) %
            MOD;

        // sum each other the current value
        sum = (sum + dp[i]) % MOD;
        sumPer3[i % 3] = (sumPer3[i % 3] + dp[i]) % MOD;
    }

    return dp[n];
};