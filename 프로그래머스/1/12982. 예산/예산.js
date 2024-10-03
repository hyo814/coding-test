function solution(d, budget) {
    // 부서별 신청 금액을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    let count = 0; // 예산으로 지원할 수 있는 부서의 수
    
    for(let i = 0; i < d.length; i++) {
        budget -= d[i]; // 예산에서 현재 부서의 신청 금액을 빼줌
        if(budget < 0) break; // 예산이 부족하면 반복 종료
        count++; // 예산이 충분하면, 지원할 수 있는 부서의 수 증가
    }
    
    return count; // 지원할 수 있는 부서의 수 반환
}
