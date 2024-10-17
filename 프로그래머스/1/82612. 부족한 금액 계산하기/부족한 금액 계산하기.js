function solution(price, money, count) {
    let totalCost = 0; // 총 비용을 저장할 변수를 0으로 초기화합니다.
    
    // 놀이기구를 1번부터 count번까지 이용하는 데 필요한 총 비용을 계산합니다.
    for(let i = 1; i <= count; i++) {
        totalCost += price * i; // 각 이용 횟수에 따른 비용을 더합니다.
    }
    
    // 계산된 총 비용에서 사용자가 처음 가지고 있던 금액을 빼서 얼마나 모자라는지 계산합니다.
    let shortfall = totalCost - money;
    
    // 모자란 금액이 없거나 금액이 부족하지 않으면 0을 반환합니다. 그렇지 않으면 모자란 금액을 반환합니다.
    return shortfall > 0 ? shortfall : 0;
}
