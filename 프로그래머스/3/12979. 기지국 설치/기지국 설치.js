function solution(N, stations, W) {
    let answer = 0;
    let current = 1; // 현재 커버리지의 시작 지점

    // 각 기지국을 순회하며 커버리지 계산
    for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        const left = station - W; // 현재 기지국의 왼쪽 커버리지 시작
        const right = station + W; // 현재 기지국의 오른쪽 커버리지 끝

        // 현재 커버리지 끝까지 닿지 않는 구간이 있으면 설치
        if (current < left) {
            // 설치가 필요한 구간의 길이
            const gap = left - current;
            // 이 구간에 필요한 기지국의 개수 계산
            answer += Math.ceil(gap / (2 * W + 1));
        }

        // 다음 커버리지는 이번 기지국의 끝 이후부터 시작
        current = right + 1;
    }

    // 마지막 커버리지 이후 남은 구간 처리
    if (current <= N) {
        // 남은 구간의 길이
        const gap = N - current + 1;
        // 남은 구간에 필요한 기지국의 개수 계산
        answer += Math.ceil(gap / (2 * W + 1));
    }

    return answer;
}

// 예제 입력
console.log(solution(11, [4, 11], 1)); // 출력: 3
console.log(solution(16, [9], 2)); // 출력: 3
