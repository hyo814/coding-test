function solution(n, k) {
    // 1단계: n을 k진수로 변환
    const kBaseNumber = n.toString(k);
    
    // 2단계: '0'을 구분자로 사용하여 숫자 추출
    const candidates = kBaseNumber.split('0').filter(num => num !== '');
    
    // 3단계: 소수 판별 함수
    const isPrime = (num) => {
        const number = parseInt(num);
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    };
    
    // 4단계: 소수 개수 카운트
    let primeCount = 0;
    candidates.forEach(candidate => {
        if (isPrime(candidate)) {
            primeCount += 1;
        }
    });

    return primeCount;
}
