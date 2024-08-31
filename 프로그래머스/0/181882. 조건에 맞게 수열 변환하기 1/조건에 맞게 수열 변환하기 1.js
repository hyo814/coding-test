function solution(arr) {
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        var number = arr[i];

        // 값이 50보다 크거나 같은 짝수인 경우
        if (number >= 50 && number % 2 === 0) {
            answer.push(number / 2);
        }
        // 값이 50보다 작은 홀수인 경우
        else if (number < 50 && number % 2 !== 0) {
            answer.push(number * 2);
        }
        // 그 외의 경우, 원래의 숫자를 그대로 추가
        else {
            answer.push(number);
        }
    }

    return answer;
}