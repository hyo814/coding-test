function solution(n) {
    let answer = [];
    let triangle = Array.from({length: n}, (_, i) => Array(i + 1).fill(0));
    let x = -1, y = 0;
    let num = 1;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {
                x++;
            } else if (i % 3 === 1) {
                y++;
            } else {
                x--;
                y--;
            }
            triangle[x][y] = num++;
        }
    }

    // 2차원 배열을 1차원 배열로 변환
    triangle.forEach(row => {
        answer.push(...row);
    });

    return answer;
}