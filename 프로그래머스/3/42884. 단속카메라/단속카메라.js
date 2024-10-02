function solution(routes) {
    // 차량의 진출 지점을 기준으로 routes를 정렬합니다.
    routes.sort((a, b) => a[1] - b[1]);

    let cameras = 0;
    let cameraPosition = -30001;  // 카메라 위치를 최소 가능한 값보다 낮게 설정

    for (let route of routes) {
        if (cameraPosition < route[0]) {
            // 카메라가 현재 차량의 진입 지점보다 뒤에 위치하면 새로운 카메라 설치
            cameras++;
            cameraPosition = route[1];
        }
    }

    return cameras;
}
