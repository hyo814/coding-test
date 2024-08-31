const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function() {
    const str = input.join('\n'); // 여러 줄 입력을 하나의 문자열로 결합
    const rows = str.split('\n'); // 문자열을 줄바꿈으로 분리하여 행 배열 생성
    const columnLength = rows[0].length; // 회전한 문자열의 행 길이 (원래 문자열의 열 길이)

    // 시계 방향으로 90도 회전한 문자열 생성
    let rotatedStr = '';
    for (let i = 0; i < columnLength; i++) {
        for (let j = rows.length - 1; j >= 0; j--) {
            rotatedStr += rows[j][i];
        }
        rotatedStr += '\n'; // 새 행 추가
    }

    console.log(rotatedStr); // 회전한 문자열 출력
});
