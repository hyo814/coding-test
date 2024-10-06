function solution(s) {
    let transformationCount = 0;
    let removedZeroCount = 0;
    
    while (s !== "1") {
        let originalLength = s.length;
        s = s.replace(/0/g, '');  // 문자열 s에서 모든 0을 제거
        let newLength = s.length;
        removedZeroCount += (originalLength - newLength);  // 제거된 0의 개수 누적
        s = newLength.toString(2);  // s의 길이를 2진수 문자열로 변환
        transformationCount++;  // 변환 횟수 증가
    }
    
    return [transformationCount, removedZeroCount];
}
