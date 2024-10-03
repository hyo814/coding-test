function solution(n) {
    // 주어진 숫자 n을 3진법으로 변환하고 문자열로 만듭니다.
    const ternary = n.toString(3);
    
    // 변환된 문자열을 뒤집습니다.
    const reversedTernary = ternary.split('').reverse().join('');
    
    // 뒤집힌 3진법 문자열을 다시 10진법 숫자로 변환합니다.
    return parseInt(reversedTernary, 3);
}
