function solution(k, dungeons) {
    // 모든 던전 탐험 순서의 순열을 생성
    const permutations = getPermutations(dungeons, dungeons.length);
    let maxDungeons = 0;

    // 생성된 모든 순열에 대해 반복
    for (let perm of permutations) {
        let currentFatigue = k;
        let count = 0;

        // 현재 순열의 순서대로 던전을 탐험
        for (let [minFatigue, useFatigue] of perm) {
            if (currentFatigue >= minFatigue) {
                currentFatigue -= useFatigue;
                count++;
            } else {
                break; // 피로도가 부족하면 더 이상 탐험할 수 없음
            }
        }

        maxDungeons = Math.max(maxDungeons, count);
    }

    return maxDungeons;
}

// 배열의 모든 순열을 생성하는 함수
function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        results.push(...attached);
    });

    return results;
}
