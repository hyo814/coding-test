function solution(n, t, m, p) {
    let answer = '';
    let sequence = '';
    let num = 0;

    // 필요한 만큼의 숫자를 N진수로 변환하여 시퀀스를 만든다.
    while (sequence.length < t * m) {
        sequence += num.toString(n).toUpperCase();
        num++;
    }

    // 튜브가 말해야 하는 숫자를 찾는다.
    for (let i = 0; i < t; i++) {
        answer += sequence[(i * m) + (p - 1)];
    }

    return answer;
}