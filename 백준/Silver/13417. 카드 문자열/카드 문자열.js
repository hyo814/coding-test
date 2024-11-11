let input = [];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input.push(line);
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let ans = [];
  for (let i = 2; i < inp.length; i = i + 2) {
    let arr = inp[i].split(" ");
    let str = "";
    str += arr[0];
    for (let j = 1; j < arr.length; j++) {
      if (str.charCodeAt(0) >= arr[j].charCodeAt(0)) {
        str = arr[j] + str;
      } else {
        str = str + arr[j];
      }
    }
    ans.push(str);
  }
  console.log(ans.join("\n"));
};