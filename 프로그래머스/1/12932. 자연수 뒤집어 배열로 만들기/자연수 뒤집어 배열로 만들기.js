function solution(n) {
    var arr = n.toString().split(''); // 숫자를 문자열로 변환 후 각 자리 숫자를 배열로 분할
    arr.reverse(); // 배열 뒤집기
    var answer = arr.map(num => parseInt(num)); // 각 문자를 숫자로 변환
    return answer;
}
