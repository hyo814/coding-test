function solution(bridge_length, weight, truck_weights) {
    let current_time = 0;
    let bridge_queue = [];
    let current_weight = 0;
    
    // 다리를 건너는 트럭을 큐에 저장합니다. 각 트럭은 [트럭 무게, 다리에서의 경과 시간] 형태입니다.
    for (let i = 0; i < bridge_length; i++) {
        bridge_queue.push(0);
    }

    while (truck_weights.length > 0 || current_weight > 0) {
        // 시간 증가
        current_time++;

        // 다리에서 트럭 제거
        let truck = bridge_queue.shift();
        current_weight -= truck;

        // 새 트럭 추가 가능 여부 확인
        if (truck_weights.length > 0) {
            if (current_weight + truck_weights[0] <= weight) {
                let new_truck = truck_weights.shift();
                bridge_queue.push(new_truck);
                current_weight += new_truck;
            } else {
                bridge_queue.push(0);
            }
        }
    }

    return current_time;
}
