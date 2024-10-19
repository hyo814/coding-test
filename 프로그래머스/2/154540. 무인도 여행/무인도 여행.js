function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우
    const result = [];

    // DFS 함수 정의
    function dfs(x, y) {
        let stack = [[x, y]];
        let totalFood = 0;

        while (stack.length) {
            const [cx, cy] = stack.pop();

            // 현재 위치가 범위를 벗어나거나 이미 방문했거나 바다('X')이면 무시
            if (cx < 0 || cy < 0 || cx >= rows || cy >= cols || visited[cx][cy] || maps[cx][cy] === 'X') {
                continue;
            }

            visited[cx][cy] = true; // 방문 처리
            totalFood += Number(maps[cx][cy]); // 식량을 더해줌

            // 4방향으로 탐색
            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                stack.push([nx, ny]);
            }
        }

        return totalFood;
    }

    // 지도 순회하며 섬을 탐색
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                const food = dfs(i, j);
                result.push(food);
            }
        }
    }

    // 결과 정렬하여 반환, 섬이 없으면 -1
    return result.length ? result.sort((a, b) => a - b) : [-1];
}
