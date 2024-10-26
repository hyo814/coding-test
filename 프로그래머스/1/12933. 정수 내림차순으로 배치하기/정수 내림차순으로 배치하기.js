function solution(n) {
    var arr = n.toString().split(''); // 정수를 문자열로 변환 후 각 자릿수를 배열로 분할
    arr.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
    var sortedString = arr.join(''); // 정렬된 배열을 문자열로 결합
    return parseInt(sortedString); // 문자열을 정수로 변환하여 반환
}
