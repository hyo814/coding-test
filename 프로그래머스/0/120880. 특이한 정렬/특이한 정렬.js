function solution(numlist, n) {
  // numlist 배열을 n으로부터의 거리를 기준으로 정렬
  numlist.sort((a, b) => {
    const distanceA = Math.abs(a - n); // a와 n 사이의 거리
    const distanceB = Math.abs(b - n); // b와 n 사이의 거리

    // 거리가 같으면 더 큰 수를 앞에 오도록 정렬
    if (distanceA === distanceB) {
      return b - a;
    }
    // 거리가 다르면 더 가까운 수를 앞에 오도록 정렬
    return distanceA - distanceB;
  });

  return numlist; // 정렬된 배열 반환
}
