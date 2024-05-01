function solution(k, m, score) {
  let result = 0;
  score = score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const arr = score.slice(i, i + m);
    result += arr.length === m ? Math.min(...arr) * m : 0;
  }

  return result;
}
