function solution(numbers) {
    return numbers.map(f);
}

function f(x) {
    if (x % 2 === 0) {
        // 짝수인 경우, 비트가 1개 다른 수
        return x + 1;
    } else {
        // 홀수인 경우
        let binary = x.toString(2);
        if (binary.indexOf('0') === -1) {
            // 모든 비트가 1인 경우
            return parseInt('10' + binary.slice(1), 2);
        } else {
            // 가장 오른쪽에 있는 0을 1로 바꾸고 그 다음 위치의 비트를 0으로 바꿈
            let index = binary.lastIndexOf('0');
            binary = binary.split('');
            binary[index] = '1';
            binary[index + 1] = '0';
            return parseInt(binary.join(''), 2);
        }
    }
}
