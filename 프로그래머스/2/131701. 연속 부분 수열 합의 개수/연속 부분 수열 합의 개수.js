function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); // 원형 수열을 처리하기 위해 두 번 이어붙임
    const sums = new Set(); // 중복을 제거하기 위한 Set
    
    // 부분 수열의 길이를 1부터 n까지 늘려가며 모든 연속 부분 수열의 합을 구함
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            // start에서 시작해서 length 길이만큼 더한 합을 구함
            const subarraySum = extended.slice(start, start + length).reduce((acc, num) => acc + num, 0);
            sums.add(subarraySum); // 합을 Set에 추가
        }
    }
    
    return sums.size; // 중복을 제거한 부분 수열의 합의 개수를 반환
}
