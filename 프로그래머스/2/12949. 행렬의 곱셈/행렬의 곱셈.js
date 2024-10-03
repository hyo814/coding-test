function solution(arr1, arr2) {
    // arr1의 행(row) 길이와 열(column) 길이를 구합니다.
    const rows1 = arr1.length;
    const cols1 = arr1[0].length;
    // arr2의 행(row) 길이와 열(column) 길이를 구합니다.
    const rows2 = arr2.length;
    const cols2 = arr2[0].length;
    
    // 결과 행렬을 초기화합니다. (rows1 x cols2 크기)
    const result = Array.from({ length: rows1 }, () => Array(cols2).fill(0));
    
    // 행렬 곱셈을 수행합니다.
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}
