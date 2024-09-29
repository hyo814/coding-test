function solution(money) {
    const n = money.length;
    if (n === 1) return money[0];

    function rob(nums) {
        const len = nums.length;
        const dp = Array(len).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        
        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        
        return dp[len - 1];
    }

    // 첫 번째 집을 포함하고 마지막 집을 제외한 경우
    const max1 = rob(money.slice(0, n - 1));
    // 첫 번째 집을 제외하고 마지막 집을 포함한 경우
    const max2 = rob(money.slice(1));

    return Math.max(max1, max2);
}