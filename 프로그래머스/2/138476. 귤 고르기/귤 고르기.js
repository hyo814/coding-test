function solution(k, tangerine) {
    // 크기별로 귤의 개수를 센다.
    const sizeCounts = {};
    for (let size of tangerine) {
        if (sizeCounts[size]) {
            sizeCounts[size]++;
        } else {
            sizeCounts[size] = 1;
        }
    }

    // 각 크기의 귤 개수를 배열로 변환하여 내림차순 정렬한다.
    const counts = Object.values(sizeCounts).sort((a, b) => b - a);

    let total = 0;
    let types = 0;
    
    // 귤의 개수가 많은 크기부터 선택하여 k개를 채운다.
    for (let count of counts) {
        total += count;
        types++;
        if (total >= k) {
            break;
        }
    }

    return types;
}