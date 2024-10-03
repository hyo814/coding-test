function solution(s) {
    var answer = true;
    var check = s.toLowerCase(); // 모든 문자를 소문자로 변환
    var pCount = 0;
    var yCount = 0;

    for (let i = 0; i < check.length; i++) {
        if (check[i] === "p") {
            pCount += 1;
        } else if (check[i] === "y") {
            yCount += 1;
        }
    }

    if (pCount === yCount) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}
