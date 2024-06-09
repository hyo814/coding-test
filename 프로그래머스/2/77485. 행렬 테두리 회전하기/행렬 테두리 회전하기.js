function solution(rows, columns, queries) {
    // 행렬 초기화
    let matrix = Array.from({ length: rows }, (_, i) => 
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );

    const rotate = (x1, y1, x2, y2) => {
        let temp = matrix[x1][y1];
        let minVal = temp;

        // Left side
        for (let i = x1; i < x2; i++) {
            matrix[i][y1] = matrix[i + 1][y1];
            minVal = Math.min(minVal, matrix[i][y1]);
        }
        // Bottom side
        for (let i = y1; i < y2; i++) {
            matrix[x2][i] = matrix[x2][i + 1];
            minVal = Math.min(minVal, matrix[x2][i]);
        }
        // Right side
        for (let i = x2; i > x1; i--) {
            matrix[i][y2] = matrix[i - 1][y2];
            minVal = Math.min(minVal, matrix[i][y2]);
        }
        // Top side
        for (let i = y2; i > y1; i--) {
            matrix[x1][i] = matrix[x1][i - 1];
            minVal = Math.min(minVal, matrix[x1][i]);
        }
        matrix[x1][y1 + 1] = temp;

        return minVal;
    };

    let result = [];
    for (let [x1, y1, x2, y2] of queries) {
        result.push(rotate(x1 - 1, y1 - 1, x2 - 1, y2 - 1));
    }

    return result;
}

