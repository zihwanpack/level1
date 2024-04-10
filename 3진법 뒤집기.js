function solution(n) {
  let result = "";
  let answer = 0;

  while (n > 0) {
    let r = n % 3;
    n = parseInt(n / 3);
    result += String(r);
  }

  result = [...result].reverse();
  for (let i = 0; i < result.length; i++) {
    answer += parseInt(result[i]) * Math.pow(3, i);
  }
  return answer;
}
