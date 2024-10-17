function solution(n) {
    // 조건에 만족하도록 배치할 수 있는 경우의 수
    let result = 0
    // dfs알고리즘
    function dfs(board, row) {
        // 마지막 행까지 도달한 경우 경우의 수 ++
        if(row === n) result++
        else {
            for(let i = 1 ; i <= n ; i ++) {
                // 다음 행에 수를 추가하고 유효값인지 검사
                board[row+1] = i
                if(isValid(board, row+1)) dfs(board, row+1)
            }
        }
    }
    // 퀸의 위치가 유효한지 검사
    function isValid(board, row) {
        for(let i = 1 ; i < row ; i ++) {
            // 퀸끼리 번호가 겹친다면 false 반환
            if(board[i] === board[row]) return false
            // 퀸끼리 기울기가 같다면 같은 대각선 경로에 있는것이기 때문에 false 반환
            if(Math.abs(board[i] - board[row]) === Math.abs(i-row)) return false
        }
        return true
    }
    for(let i = 1 ; i <= n ; i ++) {
        // 편의를 위해 배열을 1부터 시작하도록 n+1의 길이의 배열 생성
        const board = new Array(n+1).fill()
        board[1] = i
        dfs(board, 1)
    }
    
    return result
}