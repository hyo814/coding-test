function solution(str1, str2) {
    // 두 글자씩 끊은 문자열 쌍을 저장하는 함수
    function makePairs(str) {
        let pairs = [];
        for (let i = 0; i < str.length - 1; i++) {
            let pair = str[i] + str[i + 1];
            // 영문자만 유효하므로 대문자화 후 알파벳만 필터링
            if (/[A-Z]{2}/.test(pair.toUpperCase())) {
                pairs.push(pair.toUpperCase());
            }
        }
        return pairs;
    }

    let set1 = makePairs(str1);
    let set2 = makePairs(str2);

    // 교집합, 합집합 계산
    let intersection = [];
    let union = [];

    let set1Map = new Map();
    let set2Map = new Map();

    // 첫 번째 집합의 원소를 카운팅
    set1.forEach((item) => {
        set1Map.set(item, (set1Map.get(item) || 0) + 1);
    });

    // 두 번째 집합의 원소를 카운팅
    set2.forEach((item) => {
        set2Map.set(item, (set2Map.get(item) || 0) + 1);
    });

    // 교집합과 합집합 계산
    let allKeys = new Set([...set1Map.keys(), ...set2Map.keys()]);
    allKeys.forEach((key) => {
        let count1 = set1Map.get(key) || 0;
        let count2 = set2Map.get(key) || 0;
        let minCount = Math.min(count1, count2);
        let maxCount = Math.max(count1, count2);

        // 교집합 원소 추가
        for (let i = 0; i < minCount; i++) {
            intersection.push(key);
        }

        // 합집합 원소 추가
        for (let i = 0; i < maxCount; i++) {
            union.push(key);
        }
    });

    // 자카드 유사도 계산
    let jaccardSimilarity = union.length === 0 ? 1 : intersection.length / union.length;

    // 65536을 곱한 후 정수부만 반환
    return Math.floor(jaccardSimilarity * 65536);
}
