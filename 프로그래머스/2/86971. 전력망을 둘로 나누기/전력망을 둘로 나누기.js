function solution(n, wires) {
    // 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    let minDiff = Number.MAX_SAFE_INTEGER;

    // 전선을 하나씩 끊어보며 송전탑 개수 차이 계산
    wires.forEach(([a, b]) => {
        const visited = Array(n + 1).fill(false);
        
        // a와 b 연결 끊기
        let countA = dfs(graph, a, visited, b);
        let countB = dfs(graph, b, visited, a);

        // 송전탑 개수 차이의 최소값 업데이트
        minDiff = Math.min(minDiff, Math.abs(countA - countB));
    });

    return minDiff;
}

// 깊이 우선 탐색(DFS)으로 연결된 송전탑 개수 계산
function dfs(graph, node, visited, exclude) {
    visited[node] = true;
    let count = 1;

    for (let next of graph[node]) {
        if (!visited[next] && next !== exclude) {
            count += dfs(graph, next, visited, -1);
        }
    }

    return count;
}
