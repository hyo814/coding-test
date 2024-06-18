function solution(n, computers) {
    // 각 컴퓨터가 방문되었는지 확인하는 배열
    let visited = Array(n).fill(false);
    let networkCount = 0;

    // 깊이 우선 탐색(DFS) 함수 정의
    function dfs(node) {
        // 현재 노드를 방문 처리
        visited[node] = true;

        // 인접한 모든 노드에 대해
        for (let i = 0; i < n; i++) {
            // 연결되어 있고 방문하지 않았다면 DFS 수행
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    // 모든 컴퓨터를 순회하며
    for (let i = 0; i < n; i++) {
        // 아직 방문하지 않은 컴퓨터라면 DFS를 시작
        if (!visited[i]) {
            dfs(i);
            networkCount++; // 네트워크 하나 추가
        }
    }

    return networkCount; // 총 네트워크의 수 반환
}
