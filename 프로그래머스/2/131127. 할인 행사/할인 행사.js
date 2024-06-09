function solution(want, number, discount) {
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    let totalDays = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const currentDiscount = discount.slice(i, i + 10);
        const currentMap = new Map();

        for (const item of currentDiscount) {
            currentMap.set(item, (currentMap.get(item) || 0) + 1);
        }

        let canJoin = true;
        for (const [item, count] of wantMap.entries()) {
            if ((currentMap.get(item) || 0) < count) {
                canJoin = false;
                break;
            }
        }

        if (canJoin) {
            totalDays++;
        }
    }

    return totalDays;
}