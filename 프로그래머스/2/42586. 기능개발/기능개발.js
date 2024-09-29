function solution(progresses, speeds) {
    var answer = [];
    var days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    var maxDay = days[0];

    var features = 0;
    for (var i = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            features++;
        } else {
            answer.push(features);
            features = 1;
            maxDay = days[i];
        }
    }
    answer.push(features);
    return answer;
}
