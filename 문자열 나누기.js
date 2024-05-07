function solution(s) {
  let answer = 0;
  let count1 = 0,
    count2 = 0,
    x = null;

  for (let str of s) {
    if (count1 === count2) {
      answer++;
      x = str;
    }
    x === str ? count1++ : count2++;
  }
  return answer;
}
