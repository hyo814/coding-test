function solution(order) {
    let currentIndex = 0;
    const stack = [];
    let loadedBoxes = 0;

    for (let boxNumber = 1; boxNumber <= order.length; boxNumber++) {
        if (order[currentIndex] === boxNumber) {
            loadedBoxes++;  // 현재 상자를 트럭에 싣습니다.
            currentIndex++; // 다음 순서로 넘어갑니다.
            while (stack.length > 0 && stack[stack.length - 1] === order[currentIndex]) {
                stack.pop();
                loadedBoxes++;
                currentIndex++;
            }
        } else {
            stack.push(boxNumber);
        }
    }

    return loadedBoxes;
}
