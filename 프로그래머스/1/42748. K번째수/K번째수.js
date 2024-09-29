function solution(array, commands) {
    let answer = [];

    commands.forEach(command => {
        // array를 i번째부터 j번째까지 자르고 정렬
        const [i, j, k] = command;
        const sliced = array.slice(i - 1, j).sort((a, b) => a - b);

        // k번째 숫자 찾기
        answer.push(sliced[k - 1]);
    });

    return answer;
}
