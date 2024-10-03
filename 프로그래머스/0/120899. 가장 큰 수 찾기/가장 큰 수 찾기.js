function solution(array) {
    let maxNumber = -Infinity; // 가장 큰 수를 저장할 변수
    let maxIndex = -1;        // 가장 큰 수의 인덱스를 저장할 변수

    // 배열을 순회하며 가장 큰 수와 인덱스 찾기
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
            maxIndex = i;
        }
    }

    // 가장 큰 수와 그 인덱스를 배열로 반환
    return [maxNumber, maxIndex];
}
