function solution(A, B) {
    // 두 배열을 오름차순 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let aPointer = 0;
    let bPointer = 0;
    let score = 0;

    // 두 배열을 순회하며 비교
    while (bPointer < B.length) {
        if (B[bPointer] > A[aPointer]) {
            // B의 값이 A보다 크면 승점 획득
            score++;
            aPointer++; // A의 다음 값을 가리킴
        }
        bPointer++; // B의 다음 값을 가리킴
    }

    return score;
}
