function solution(num_list) {
    var oddNum = [];
    var evenNum = [];
    for(let i = 0; i< num_list.length; i++){
        if(num_list[i]%2 === 0) {
            evenNum.push(num_list[i]);
        } else {
            oddNum.push(num_list[i]);
        }
    }
    
    // join을 사용하여 배열의 요소들을 문자열로 변환
    var oddString = oddNum.join("");
    var evenString = evenNum.join("");

    // 문자열을 숫자로 변환하고 합산
    var answer = parseInt(oddString) + parseInt(evenString);
    
    return answer;
}
