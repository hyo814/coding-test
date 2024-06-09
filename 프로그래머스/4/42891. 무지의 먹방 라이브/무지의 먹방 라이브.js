function solution(food_times, k) {
    let n = food_times.length;
    let foodIndexed = food_times.map((time, index) => [time, index + 1]);
    foodIndexed.sort((a, b) => a[0] - b[0]);

    let totalTime = 0;
    for (let i = 0; i < n; i++) {
        let remainingFoods = n - i;
        let currentEatTime = (foodIndexed[i][0] - (foodIndexed[i-1]?.[0] || 0)) * remainingFoods;
        if (totalTime + currentEatTime > k) {
            foodIndexed = foodIndexed.slice(i).sort((a, b) => a[1] - b[1]);
            return foodIndexed[(k - totalTime) % remainingFoods][1];
        }
        totalTime += currentEatTime;
    }

    return -1;
}
