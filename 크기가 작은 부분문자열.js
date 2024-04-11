function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let substring = t.substring(i, i + p.length);
    if (parseInt(substring) <= parseInt(p)) result++;
  }
  return result;
}
