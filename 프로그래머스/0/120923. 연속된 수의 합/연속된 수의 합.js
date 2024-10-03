function solution(num, total) {
    // 연속된 숫자들의 평균을 구합니다.
    const average = total / num;
    
    // 첫 번째 숫자를 찾습니다. 평균에서 (num-1)/2를 빼서 시작점을 계산합니다.
    let start = Math.floor(average - (num - 1) / 2);
    
    // 연속된 숫자들을 저장할 배열을 선언합니다.
    let answer = [];
    
    // start부터 num개의 연속된 숫자를 배열에 추가합니다.
    for(let i = 0; i < num; i++) {
        answer.push(start + i);
    }
    
    return answer;
}
