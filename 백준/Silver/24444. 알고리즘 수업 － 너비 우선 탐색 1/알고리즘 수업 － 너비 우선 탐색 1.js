let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(" ").map(Number);
const arr = input.slice(1);
const graph = Array.from({ length: N + 1 }, () => []);
const visitedOrder = Array(N + 1).fill(0);
let order = 1;

for (const v of arr) {
    let [a, b] = v.split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for (const edges of graph) {
    edges.sort((a, b) => a - b);
}

function bfs(start) {
    const queue = [start];
    visitedOrder[start] = order++;

    while (queue.length) {
        const node = queue.shift();

        for (const v of graph[node]) {
            if (!visitedOrder[v]) {
                queue.push(v);
                visitedOrder[v] = order++;
            }
        }
    }
}

bfs(R);

console.log(visitedOrder.slice(1).join("\n"));
