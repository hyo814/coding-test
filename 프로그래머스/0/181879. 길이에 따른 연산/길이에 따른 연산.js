function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        answer = 0; // 합계를 위해 0으로 초기화
        for(let i = 0; i < num_list.length; i++){
            answer += num_list[i];
        }
    } else {
        answer = 1; // 곱셈을 위해 1로 초기화
        for (let i = 0; i < num_list.length; i++){
            answer *= num_list[i];
        }
    }
    return answer;
}
