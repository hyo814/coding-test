function solution(t, p) {
    let count = 0; // 조건을 만족하는 부분문자열의 개수를 저장할 변수
    const pNum = parseInt(p); // p를 숫자로 변환

    // t에서 p의 길이와 같은 부분문자열을 모두 검사
    for (let i = 0; i <= t.length - p.length; i++) {
        const subStr = t.substring(i, i + p.length); // 부분문자열 추출
        const subNum = parseInt(subStr); // 추출된 부분문자열을 숫자로 변환

        // 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 경우
        if (subNum <= pNum) {
            count++; // 개수 증가
        }
    }

    return count; // 결과 반환
}
