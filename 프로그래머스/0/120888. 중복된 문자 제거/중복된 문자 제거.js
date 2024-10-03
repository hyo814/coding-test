function solution(my_string) {
    let uniqueChars = new Set(my_string);
    let result = '';
    uniqueChars.forEach(char => {
        result += char;
    });
    return result;
}
