function collatz(k) {
    const sequence = [k];
    while (k !== 1) {
        if (k % 2 === 0) {
            k = k / 2;
        } else {
            k = 3 * k + 1;
        }
        sequence.push(k);
    }
    return sequence;
}

function areaUnderLine(x1, y1, x2, y2) {
    const width = x2 - x1;
    const height = (y1 + y2) / 2;
    return width * height;
}

function solution(k, ranges) {
    const sequence = collatz(k);
    const n = sequence.length - 1;
    const areas = [];

    // 꺾은선 그래프의 각 구간에 대한 면적 계산
    for (let i = 0; i < n; i++) {
        areas.push(areaUnderLine(i, sequence[i], i + 1, sequence[i + 1]));
    }

    const results = [];
    for (const [a, b] of ranges) {
        const end = n + b;
        if (a > end) {
            results.push(-1);
        } else {
            const integral = areas.slice(a, end).reduce((acc, area) => acc + area, 0);
            results.push(integral);
        }
    }

    return results;
}