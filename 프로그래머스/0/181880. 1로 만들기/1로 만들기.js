function solution(num_list) {
    return num_list.reduce((answer, num) => {
        while (num > 1) {
            num = num % 2 === 0 ? num / 2 : (num - 1) / 2;
            answer++;
        }
        return answer;
    }, 0);
}