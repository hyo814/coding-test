const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = parseInt(input[0]); // input 배열의 첫 번째 요소를 정수로 변환
    const b = parseInt(input[1]); // input 배열의 두 번째 요소를 정수로 변환
    console.log('a = ' + a); // 변수 a 출력
    console.log('b = ' + b); // 변수 b 출력
});