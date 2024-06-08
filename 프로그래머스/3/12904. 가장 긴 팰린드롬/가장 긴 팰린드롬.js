function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

function solution(s) {
    if (s == null || s.length < 1) return 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // 홀수 길이 팰린드롬
        let len2 = expandAroundCenter(s, i, i + 1); // 짝수 길이 팰린드롬
        let len = Math.max(len1, len2);
        maxLen = Math.max(maxLen, len);
    }

    return maxLen;
}
