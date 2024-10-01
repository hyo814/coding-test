function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    // 각 자리수마다 가질 수 있는 조합의 수
    const weights = [781, 156, 31, 6, 1]; // 각 자리수별 가중치 계산

    for (let i = 0; i < word.length; i++) {
        // 현재 문자의 인덱스를 찾아 가중치를 곱함
        const index = vowels.indexOf(word[i]);
        answer += weights[i] * index + 1;
    }

    return answer;
}
