const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 1;

let end = arr[arr.length - 1];

let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let sum = 0;

  for (let x of arr) {
    if (x > mid) {
      sum += x - mid;
    }
  }

  // 만들어진 나무의 길이 합이 목표보다 짧다면,
  // 즉 나무 길이를 더 짧게 해주어서 늘려주어야한다
  if (M > sum) {
    end = mid - 1;
  }

  // 만들어진 나무 길이 합이 목표값보다 많다면
  // 나무 길이를 더 늘려주어서 sum이 작아지도록 해야한다.
  else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);