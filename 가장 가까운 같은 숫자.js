function solution(s) {
  const inxArr = [];
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (inxArr.includes(s[i])) {
      answer.push(inxArr.length - inxArr.lastIndexOf(s[i]));
      inxArr.push(s[i]);
    } else {
      answer.push(-1);
      inxArr.push(s[i]);
    }
  }
  return answer;
}
