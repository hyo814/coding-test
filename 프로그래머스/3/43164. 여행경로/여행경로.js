function solution(tickets) {
    tickets.sort(); // 티켓을 알파벳 순으로 정렬합니다.
    let visited = Array(tickets.length).fill(false); // 티켓 방문 여부를 체크하기 위한 배열입니다.

    // DFS 함수 정의
    function dfs(airport, path, count) {
        path.push(airport); // 현재 공항을 경로에 추가합니다.

        // 모든 티켓을 사용했다면 현재 경로를 반환합니다.
        if (count === tickets.length) {
            return path;
        }

        for (let i = 0; i < tickets.length; i++) {
            // 아직 사용하지 않은 티켓이고, 현재 공항에서 출발하는 티켓이라면
            if (!visited[i] && tickets[i][0] === airport) {
                visited[i] = true; // 티켓을 사용했다고 표시합니다.
                const result = dfs(tickets[i][1], path.slice(), count + 1); // 다음 공항으로 DFS를 진행합니다.
                if (result) return result; // 유효한 경로를 찾았다면 반환합니다.
                visited[i] = false; // 다른 경로를 탐색하기 위해 방문 상태를 원래대로 돌립니다.
            }
        }
    }

    return dfs("ICN", [], 0); // "ICN" 공항에서 시작합니다.
}
