function solution(operations) {
    let queue = [];
    
    operations.forEach(operation => {
        let [command, value] = operation.split(' ');
        value = parseInt(value);
        
        if (command === 'I') {
            // 숫자 삽입
            queue.push(value);
            queue.sort((a, b) => a - b); // 오름차순 정렬
        } else if (command === 'D') {
            if (queue.length > 0) {
                if (value === 1) {
                    // 최댓값 삭제
                    queue.pop(); // 배열 끝 요소 삭제
                } else if (value === -1) {
                    // 최솟값 삭제
                    queue.shift(); // 배열 첫 요소 삭제
                }
            }
        }
    });
    
    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [queue[queue.length - 1], queue[0]]; // 최댓값, 최솟값 반환
    }
}
