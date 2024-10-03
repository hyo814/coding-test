function solution(before, after) {
    if (before.length !== after.length) {
        return 0; // 길이가 다르면 바로 0 반환
    }

    const beforeCount = {};
    const afterCount = {};

    // before 문자열의 각 문자별 등장 횟수 계산
    for (let char of before) {
        beforeCount[char] = (beforeCount[char] || 0) + 1;
    }

    // after 문자열의 각 문자별 등장 횟수 계산
    for (let char of after) {
        afterCount[char] = (afterCount[char] || 0) + 1;
    }

    // before과 after의 각 문자별 등장 횟수 비교
    for (let char in beforeCount) {
        if (beforeCount[char] !== afterCount[char]) {
            return 0; // 등장 횟수가 다른 문자가 있으면 0 반환
        }
    }

    // 모든 조건이 만족되면 1 반환
    return 1;
}
