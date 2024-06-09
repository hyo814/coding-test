function solution(N, number) {
    // 동적 계획법을 위한 배열 초기화
    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i < 9; i++) {
        dp[i].add(Number(String(N).repeat(i))); // N, NN, NNN, NNNN, ...

        for (let j = 1; j < i; j++) {
            for (const op1 of dp[j]) {
                for (const op2 of dp[i - j]) {
                    dp[i].add(op1 + op2);
                    dp[i].add(op1 - op2);
                    dp[i].add(op1 * op2);
                    if (op2 !== 0) {
                        dp[i].add(Math.floor(op1 / op2));
                    }
                }
            }
        }

        if (dp[i].has(number)) {
            return i;
        }
    }

    return -1;
}