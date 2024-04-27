function solution(people, limit) {
    var answer = 0;
    people.sort(function(a, b) { // 사람들의 몸무게를 오름차순으로 정렬
        return a - b;
    });

    let i = 0, j = people.length - 1; // 배열의 양 끝에서 시작
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            // 가장 가벼운 사람과 가장 무거운 사람의 몸무게 합이 제한 이하일 경우
            i++; // 다음 가장 가벼운 사람으로
        }
        j--; // 다음 가장 무거운 사람으로
        answer++; // 구명보트 사용 횟수 증가
    }

    return answer;
}



//사람들의 몸무게 배열을 오름차순으로 정렬합니다.
//가장 가벼운 사람과 가장 무거운 사람을 짝지어 볼 수 있는지 검사합니다.
//두 사람의 몸무게 합이 구명보트의 무게 제한 이하라면 두 사람을 동시에 보내고, 그렇지 않다면 가장 무거운 사람만 보냅니다.
//이 과정을 배열의 양 끝에서 중앙으로 진행하면서 사람들을 구조합니다.