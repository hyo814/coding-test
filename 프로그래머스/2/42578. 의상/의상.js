function solution(clothes) {
    // 옷의 종류별 개수를 저장하는 객체
    let clothesMap = {};

    // 옷의 종류별 개수를 세기
    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }

    // 조합의 수 계산
    let answer = 1;
    for (let key in clothesMap) {
        answer *= (clothesMap[key] + 1);
    }

    // 모든 카테고리에서 옷을 하나도 선택하지 않는 경우를 제외
    return answer - 1;
}
