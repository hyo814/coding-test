function solution(dice) {
  let answer = 0;

  let pair = new Array(7);
  pair[1] = 6;
  pair[2] = 4;
  pair[3] = 5;
  pair[4] = 2;
  pair[5] = 3;
  pair[6] = 1;

  for (let i = 1; i <= 6; i++) {
    let sum = 0;
    let sideMax = 0;
    for (let j = 1; j <= 6; j++) {
      if (j != dice[0][i - 1] && j != dice[0][pair[i] - 1]) {
        sideMax = Math.max(sideMax, j);
      }
    }
    sum += sideMax;

    let x = dice[0][i - 1]; 
    let idx = 0;

    for (let k = 2; k <= dice.length; k++) {
      sideMax = 0;
      for (let l = 1; l <= 6; l++) {
        if (dice[k - 1][l - 1] === x) {
          idx = l;
          break;
        }
      }

      let top = dice[k - 1][pair[idx] - 1];
      let bottom = x;

      for (let m = 1; m <= 6; m++) {
        if (m != top && m != bottom) sideMax = Math.max(sideMax, m);
      }
      sum += sideMax;
      x = top;
    }
    answer = Math.max(answer, sum);
  }

  return answer;
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let dice = [];
input.slice(1).map((i) => dice.push(i.split(' ').map(Number)));
console.log(solution(dice));