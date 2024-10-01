function solution(sizes) {
    // 각 명함의 가로와 세로 중 큰 값이 가로, 작은 값이 세로가 되도록 조정
    const adjustedSizes = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    // 가로와 세로 길이 중 최대값을 찾음
    let maxWidth = 0;
    let maxHeight = 0;
    for (const [w, h] of adjustedSizes) {
        if (w > maxWidth) maxWidth = w;
        if (h > maxHeight) maxHeight = h;
    }

    // 최대 가로 길이와 최대 세로 길이를 곱하여 지갑의 크기 계산
    return maxWidth * maxHeight;
}
