function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let currentSum = sequence[0];
    let minLength = Infinity;
    let result = [0, 0];

    while (end < sequence.length) {
        if (currentSum === k) {
            let currentLength = end - start + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                result = [start, end];
            }
            // 합이 k일 때는 길이를 줄여서 다른 가능성을 탐색하기 위해 start 증가
            currentSum -= sequence[start];
            start++;
        } else if (currentSum < k) {
            // 구간의 합이 k보다 작으면 end를 늘려서 구간 확장
            end++;
            if (end < sequence.length) {
                currentSum += sequence[end];
            }
        } else {
            // 구간의 합이 k보다 크면 start를 늘려서 구간 축소
            currentSum -= sequence[start];
            start++;
        }
    }

    return result;
}