function solution(s) {
  let count = 0; // 분해한 문자열의 개수를 저장할 변수
  while (s.length > 0) { // s의 길이가 0보다 클 동안 반복
    let x = s[0]; // 첫 글자를 x로 설정
    let xCount = 0; // x의 횟수
    let otherCount = 0; // x가 아닌 다른 글자들의 횟수
    for (let i = 0; i < s.length; i++) { // 문자열을 순회
      if (s[i] === x) { // 현재 글자가 x와 같으면
        xCount++; // x의 횟수 증가
      } else { // x가 아니면
        otherCount++; // 다른 글자의 횟수 증가
      }
      if (xCount === otherCount) { // x의 횟수와 다른 글자의 횟수가 같아지면
        count++; // 분해한 문자열의 개수 증가
        s = s.slice(i + 1); // 처리된 부분을 제외한 나머지 문자열로 업데이트
        break; // 내부 반복문 종료
      }
    }
    // 더 이상 분해할 수 없는 경우 (x의 횟수와 다른 글자의 횟수가 같지 않은 경우)
    if (xCount !== otherCount) {
      count++; // 남은 문자열도 하나의 문자열로 카운트하고 반복문 종료
      break;
    }
  }
  return count; // 분해된 문자열의 총 개수 반환
}
