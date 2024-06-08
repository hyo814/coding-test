function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) answer += Math.ceil((d ** 2 - x ** 2) ** 0.5 / k) + ((d ** 2 - x ** 2) ** 0.5 % k === 0 ? 1 : 0);
  return answer;
}