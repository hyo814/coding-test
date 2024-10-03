function solution(s) {
    var answer = false; // 기본값을 false로 설정
    if (s.length === 4 || s.length === 6) {
        answer = /^\d+$/.test(s); // 정규표현식을 사용하여 숫자만 있는지 확인
    }
    return answer;
}