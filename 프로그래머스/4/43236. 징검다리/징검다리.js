function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b); // 바위 위치를 오름차순으로 정렬
    rocks.push(distance); // 도착지점을 바위 배열에 추가
    let left = 1; // 이진 탐색의 최소 거리
    let right = distance; // 이진 탐색의 최대 거리
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // 중간값 계산
        let minDistance = Infinity;
        let current = 0;
        let removeCount = 0;

        for (let rock of rocks) {
            const distance = rock - current; // 현재 바위와 이전 바위 사이의 거리
            if (distance < mid) {
                // 거리가 mid보다 작으면 바위 제거
                removeCount += 1;
            } else {
                // 바위를 제거하지 않으면, 최소 거리 갱신
                minDistance = Math.min(minDistance, distance);
                current = rock; // 현재 바위를 이전 바위로 설정
            }
        }

        if (removeCount > n) {
            // 너무 많은 바위를 제거했다면, 최대 거리를 줄인다
            right = mid - 1;
        } else {
            // 바위를 충분히 제거했거나 덜 제거했다면, 최소 거리를 늘린다
            left = mid + 1;
            answer = Math.max(answer, minDistance); // 가능한 최소 거리의 최대값을 업데이트
        }
    }

    return answer;
}