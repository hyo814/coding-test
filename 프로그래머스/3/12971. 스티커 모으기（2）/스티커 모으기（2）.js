function solution(sticker) {
    const n = sticker.length;
    
    // 스티커가 한 장만 있는 경우, 바로 해당 값을 반환
    if (n === 1) return sticker[0];
    
    // 첫 번째 스티커를 선택하는 경우
    const dp1 = Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = dp1[0];
    
    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    
    // 첫 번째 스티커를 선택하지 않는 경우
    const dp2 = Array(n).fill(0);
    dp2[1] = sticker[1];
    
    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }
    
    // 두 경우의 최댓값 중 더 큰 값을 반환
    return Math.max(dp1[n - 2], dp2[n - 1]);
}
