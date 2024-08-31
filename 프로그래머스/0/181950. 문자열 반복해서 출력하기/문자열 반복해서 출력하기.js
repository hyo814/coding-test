const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' '); // 입력을 공백으로 나누어 배열에 저장
}).on('close', function () {
    let str = ''; // str를 빈 문자열로 초기화
    const n = Number(input[1]); // n은 입력 배열의 두 번째 요소를 숫자로 변환

    for (let i = 0; i < n; i++) {
        str += input[0]; // str에 input[0]을 n번 반복해서 더함
    }

    console.log(str); // 결과 출력
});
