function solution(name) {
    let answer = 0;
    const n = name.length;
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // 각 문자를 변경하는 데 필요한 조작 횟수 계산
    const moveToChar = (char) => {
        const index = alphabets.indexOf(char);
        return Math.min(index, 26 - index);
    };

    // 기본 조작 횟수 계산 (각 문자를 변경하는 횟수)
    for (let i = 0; i < n; i++) {
        answer += moveToChar(name[i]);
    }

    // 최적의 커서 이동 경로 찾기
    let minMove = n - 1; // 커서를 우측으로만 이동했을 때
    for (let i = 0; i < n; i++) {
        let next = i + 1;
        while (next < n && name[next] === 'A') {
            next++;
        }
        minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
    }
    answer += minMove;

    return answer;
}
