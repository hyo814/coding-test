// 1. 친구들 키 값 저장.
// 2. 선물 주고받은 내역 기록
// 3. 기록을 바탕으로 선물 지수 계산
// 4. 다음 달 받을 선물 계산
// 5. 최댓값 반환

function solution(friends, gifts) {
    const len = friends.length;
    const nameMap = new Map();
    const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0));
    const rankInfo = new Array(len).fill(0);
    const nextMonth = new Array(len).fill(0);

    friends.forEach((name, idx) => {
        nameMap.set(name, idx);
    })
    
    gifts.forEach(info => {
        const [from, to] = info.split(" ");
        giftTable[nameMap.get(from)][nameMap.get(to)]++;
    })

    for (let i=0; i<len; i++) {
        rankInfo[i] = giftTable[i].reduce((acc, cur) => acc += cur, 0)
        
        for (let j=0; j<len; j++) {
            rankInfo[i] -= giftTable[j][i];       
        }
    }
    
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (i===j) continue;
            if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
            if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
            if (giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
                if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
            }
        }
    }

    return Math.max(...nextMonth)
}