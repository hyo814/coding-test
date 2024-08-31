function solution(s, n) {
    return s.split('').map(char => {
        // 대문자 처리
        if (char >= 'A' && char <= 'Z') {
            // 알파벳 순환 처리
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
        }
        // 소문자 처리
        else if (char >= 'a' && char <= 'z') {
            // 알파벳 순환 처리
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
        }
        // 공백 처리
        return char;
    }).join('');
}

// 예제 입력
console.log(solution("AB", 1)); // 출력: "BC"
console.log(solution("z", 1));  // 출력: "a"
console.log(solution("a B z", 4)); // 출력: "e F d"
