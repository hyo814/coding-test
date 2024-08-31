function solution(info, query) {
    // 모든 조건의 조합을 담을 객체 생성
    const infoMap = {};

    // 지원자 정보를 기반으로 모든 가능한 조건 조합을 생성하고 저장
    function makeCombinations(arr, score, start) {
        const key = arr.join(''); // 배열을 문자열로 변환하여 키로 사용
        if (infoMap[key]) {
            infoMap[key].push(score);
        } else {
            infoMap[key] = [score];
        }

        for (let i = start; i < arr.length; i++) {
            const temp = arr.slice(); // 배열 복사
            temp[i] = '-'; // 조건을 '-'로 변경하여 다른 조합 생성
            makeCombinations(temp, score, i + 1); // 재귀 호출
        }
    }

    // 모든 지원자 정보를 처리
    info.forEach((str) => {
        const parts = str.split(' '); // 문자열 분리
        const score = parseInt(parts.pop()); // 점수 분리
        makeCombinations(parts, score, 0); // 조건 조합 생성
    });

    // 각 조건별로 점수를 정렬하여 이진 탐색을 가능하게 함
    for (const key in infoMap) {
        infoMap[key].sort((a, b) => a - b);
    }

    // 각 쿼리를 처리
    function countScores(arr, targetScore) {
        const key = arr.join(''); // 쿼리 조건을 키로 변환
        if (!infoMap[key]) return 0; // 해당 조건이 없으면 0명
        const scores = infoMap[key];
        // 이진 탐색으로 targetScore 이상의 점수 개수를 찾음
        let left = 0;
        let right = scores.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] >= targetScore) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return scores.length - left;
    }

    // 쿼리를 반복 처리하여 결과를 저장
    return query.map((q) => {
        const parts = q.replace(/ and /g, ' ').split(' '); // 조건 분리
        const targetScore = parseInt(parts.pop()); // 점수 분리
        return countScores(parts, targetScore); // 조건에 맞는 지원자 수 계산
    });
}

// 예제 입력
const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
];

const query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];

// 함수 호출 및 출력
console.log(solution(info, query)); // [1, 1, 1, 1, 2, 4]
