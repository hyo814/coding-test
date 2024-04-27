function solution(N, A, B) {
    let round = 0;

    while (A !== B) {
        // 두 참가자의 위치를 다음 라운드의 위치로 업데이트
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        
        // 다음 라운드로 진행
        round++;
    }

    return round;
}
