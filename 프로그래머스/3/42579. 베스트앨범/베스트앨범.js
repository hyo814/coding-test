function solution(genres, plays) {
    let genreMap = {};
    let songList = [];

    // 장르 별 총 재생 횟수와 노래 정보 정리
    genres.forEach((genre, index) => {
        if (!genreMap[genre]) genreMap[genre] = 0;
        genreMap[genre] += plays[index];

        songList.push({ index, plays: plays[index], genre });
    });

    // 장르를 총 재생 횟수가 높은 순으로 정렬
    let sortedGenres = Object.keys(genreMap).sort((a, b) => genreMap[b] - genreMap[a]);

    let answer = [];

    // 각 장르별로 노래를 재생 횟수가 높은 순으로 정렬
    sortedGenres.forEach(genre => {
        let songs = songList.filter(song => song.genre === genre);
        songs.sort((a, b) => b.plays - a.plays || a.index - b.index);

        // 각 장르별로 가장 많이 재생된 노래 2개 선택
        answer.push(...songs.slice(0, 2).map(song => song.index));
    });

    return answer;
}
