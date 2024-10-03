function solution(numbers, hand) {
    // 초기 손가락 위치 설정
    let leftPosition = '*';
    let rightPosition = '#';
    const handPreference = hand === 'right' ? 'R' : 'L'; // 주 사용 손 설정
    let result = '';

    // 키패드 위치 정보
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    numbers.forEach(num => {
        // 왼손으로 누르는 키
        if ([1, 4, 7].includes(num)) {
            result += 'L';
            leftPosition = num;
        }
        // 오른손으로 누르는 키
        else if ([3, 6, 9].includes(num)) {
            result += 'R';
            rightPosition = num;
        }
        // 가운데 열 키는 거리에 따라 결정
        else {
            const leftDistance = getDistance(keypad[leftPosition], keypad[num]);
            const rightDistance = getDistance(keypad[rightPosition], keypad[num]);

            if (leftDistance < rightDistance) {
                result += 'L';
                leftPosition = num;
            } else if (leftDistance > rightDistance) {
                result += 'R';
                rightPosition = num;
            } else {
                result += handPreference;
                if (handPreference === 'R') rightPosition = num;
                else leftPosition = num;
            }
        }
    });

    return result;
}

// 두 키패드 위치 간의 거리를 계산하는 함수
function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}