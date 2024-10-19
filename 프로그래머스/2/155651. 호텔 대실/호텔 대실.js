function solution(book_time) {
    // 시간을 분 단위로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    // 시작 시간과 종료 시간을 분 단위로 변환하고, 종료 시간에는 10분 청소 시간을 더한다
    const bookings = book_time.map(([start, end]) => {
        return [timeToMinutes(start), timeToMinutes(end) + 10];
    });

    // 시작 시간 기준으로 정렬
    bookings.sort((a, b) => a[0] - b[0]);

    const rooms = [];

    // 예약 시간대별로 방 배정을 시뮬레이션
    for (let [start, end] of bookings) {
        let assigned = false;

        // 현재 사용 중인 방들 중 가장 먼저 비는 방을 찾음
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start) {
                rooms[i] = end; // 이 방을 재사용하여 종료 시간을 업데이트
                assigned = true;
                break;
            }
        }

        // 사용할 방이 없다면 새로운 방이 필요함
        if (!assigned) {
            rooms.push(end);
        }
    }

    // 필요한 최소 방의 개수는 rooms 배열의 길이
    return rooms.length;
}
