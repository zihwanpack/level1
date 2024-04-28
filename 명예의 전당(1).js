function solution(k, score) {
  const arr = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr.push(score[i]);
      answer.push(Math.min(...arr));
    } else {
      if (arr[0] < score[i]) {
        arr.splice(0, 1, score[i]);
      }
      answer.push(Math.min(...arr));
    }
    arr.sort((a, b) => a - b);
  }
  return answer;
}
