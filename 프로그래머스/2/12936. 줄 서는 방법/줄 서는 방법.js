function solution(n, k) {
    // 팩토리얼을 미리 계산해 놓습니다.
    let factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    // 숫자 리스트를 생성합니다.
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    // 결과를 담을 배열
    let result = [];
    
    // k가 1-based이기 때문에 0-based로 변환합니다.
    k--;

    // 순열을 생성합니다.
    for (let i = n; i > 0; i--) {
        // 현재 자리의 인덱스를 결정합니다.
        let index = Math.floor(k / factorial[i - 1]);
        result.push(numbers[index]);
        
        // 사용한 숫자를 리스트에서 제거합니다.
        numbers.splice(index, 1);

        // k 값을 업데이트합니다.
        k %= factorial[i - 1];
    }

    return result;
}
