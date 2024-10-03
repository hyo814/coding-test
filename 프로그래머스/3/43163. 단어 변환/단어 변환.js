function solution(begin, target, words) {
    // target이 words 안에 없으면 변환할 수 없음
    if (!words.includes(target)) return 0;

    // BFS를 위한 큐 초기화
    let queue = [[begin, 0]];
    let visited = new Set();

    // 두 단어가 한 글자만 다른지 확인하는 함수
    function canTransform(word1, word2) {
        let diffCount = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diffCount++;
            if (diffCount > 1) return false;
        }
        return diffCount === 1;
    }

    // BFS 시작
    while (queue.length > 0) {
        let [currentWord, steps] = queue.shift();

        // 현재 단어가 타겟 단어와 같으면 변환 과정 종료
        if (currentWord === target) return steps;

        // 현재 단어와 한 글자만 다른 단어들을 찾고 큐에 추가
        for (let word of words) {
            if (!visited.has(word) && canTransform(currentWord, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        }
    }

    // 변환할 수 없는 경우 0 반환
    return 0;
}