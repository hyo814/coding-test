function solution(answers) {
    // 각 수포자의 찍는 패턴
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    // 각 수포자 별 맞힌 문제 수
    const scores = [0, 0, 0];

    // 정답과 각 수포자의 패턴을 비교
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                scores[j]++;
            }
        }
    }

    // 가장 많은 문제를 맞힌 수포자 찾기
    const maxScore = Math.max(...scores);
    const result = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);
        }
    }

    // 오름차순으로 정렬하여 반환
    return result.sort((a, b) => a - b);
}
