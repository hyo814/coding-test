function solution(expression) {
    const operators = ['+', '-', '*'];
    const operatorPermutations = getPermutations(operators);
    
    let maxResult = 0;
    
    operatorPermutations.forEach((priority) => {
        const result = Math.abs(calculate(expression, priority));
        maxResult = Math.max(maxResult, result);
    });
    
    return maxResult;
}

function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    
    const result = [];
    
    arr.forEach((current, index) => {
        const remaining = arr.slice(0, index).concat(arr.slice(index + 1));
        const permutations = getPermutations(remaining);
        
        permutations.forEach((perm) => {
            result.push([current, ...perm]);
        });
    });
    
    return result;
}

function calculate(expression, priority) {
    let expArray = expression.split(/(\D)/);
    
    priority.forEach((operator) => {
        while (expArray.includes(operator)) {
            const index = expArray.indexOf(operator);
            const result = eval(`${expArray[index - 1]}${operator}${expArray[index + 1]}`);
            expArray.splice(index - 1, 3, result);
        }
    });
    
    return expArray[0];
}
