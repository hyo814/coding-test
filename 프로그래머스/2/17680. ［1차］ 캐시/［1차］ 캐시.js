function solution(cacheSize, cities) {
  let totalTime = 0;
  let cache = [];

  cities.forEach(city => {
    city = city.toLowerCase(); // 대소문자 구분하지 않음
    const idx = cache.indexOf(city);
    
    if (idx !== -1) {
      // Cache hit
      cache.splice(idx, 1); // 해당 도시를 제거하고
      cache.push(city); // 맨 뒤에 다시 추가
      totalTime += 1; // hit 시간
    } else {
      // Cache miss
      if (cache.length >= cacheSize && cacheSize > 0) {
        cache.shift(); // 가장 오래된 도시 제거
      }
      if (cacheSize > 0) {
        cache.push(city); // 새로운 도시 추가
      }
      totalTime += 5; // miss 시간
    }
  });

  return totalTime;
}
