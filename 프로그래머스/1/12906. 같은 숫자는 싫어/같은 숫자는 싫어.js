function solution(arr)
{
    var answer = []; // 결과를 저장할 배열
    let previous = null;  // 이전 숫자를 추적할 변수

    for (let i=0; i < arr.length; i++) {
        if(arr[i]!== previous) { // 다른 경우에만 배열 추가
            answer.push(arr[i]);
            previous = arr[i];
        }
    }
    return answer;
}