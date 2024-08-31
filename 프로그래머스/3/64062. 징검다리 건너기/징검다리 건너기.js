function solution(stones, k) {
    // 최대 몇 명이 건널 수 있는지 탐색하는 이진 탐색 함수
    let left = 1; // 최소 1명은 건널 수 있음
    let right = 200000000; // 문제에서 주어진 최대 범위로 설정
    let answer = 0;

    // 이진 탐색 시작
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canCross(stones, k, mid)) {
            answer = mid; // mid 명이 건널 수 있으면 answer 업데이트
            left = mid + 1; // 더 많은 인원을 탐색
        } else {
            right = mid - 1; // 건널 수 없으면 인원을 줄임
        }
    }

    return answer;
}

// 특정 인원수가 주어졌을 때 건널 수 있는지 확인하는 함수
function canCross(stones, k, friends) {
    let skip = 0; // 연속으로 밟을 수 없는 디딤돌의 수

    for (let stone of stones) {
        if (stone < friends) {
            skip++; // 건널 수 없으면 건너뜀
            if (skip >= k) {
                return false; // 연속으로 k개 이상 건너뛰면 건널 수 없음
            }
        } else {
            skip = 0; // 건널 수 있으면 건너뜀 초기화
        }
    }

    return true; // 건널 수 있으면 true 반환
}

// 예제 입력
const stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;

// 함수 호출 및 결과 출력
console.log(solution(stones, k)); // 출력: 3
