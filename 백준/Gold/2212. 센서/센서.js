const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let input = [];

rl.on("line", function (line) {
  if (!N) {
    N = +line;
  } else if (!K) {
    K = +line;
  } else {
    input = line.split(" ").map(Number);

    rl.close();
  }
}).on("close", function () {
  let result = 0; // 정답을 담을 변수
  input.sort((a, b) => a - b);
 
  let D = []; // 거리 격차를 담을 배열
  for (let i = 1; i < N; i++) {
    const gap = input[i] - input[i - 1];
    D.push([i - 1, gap]);
  }
  
  // 집중국의 수신 가능 영역을 나눌 특정 위치를 담을 배열
  // K - 1번 나누어 주면 K개 영역으로 나눌 수 있으므로 K - 1번 
  // 나누어 주고, 위치를 기준으로 오름차순 정렬
  // 수신 가능 영역별로 거리를 구하기 위해 반드시 마지막 위치또한 
  // 포함되어 있어야 하므로, [마지막 위치, 의미없는 값]을 push
  S = [...D]
    .sort((a, b) => b[1] - a[1])
    .slice(0, K - 1)
    .sort((a, b) => a[0] - b[0]);
  S.push([N - 1, 0]);
  
  let index = 0;
  let start = 0;
  while (index < S.length) {
    const [end, _] = S[index++];
    for (let i = start; i < end; i++) {
      // D배열은 센서들의 거리 격차를 담고 있는 배열입니다.
      // S에 담긴 수신 가능 영역으로 나눌 위치를 기준으로 
      // 수신 가능 영역별로 거리를 정답에 더해줍니다.
      result += D[i][1];
    }
    start = end + 1;
  }

  console.log(result);
  process.exit();
});