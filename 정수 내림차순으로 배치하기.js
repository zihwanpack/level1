function solution(n) {
  let str = n + "";
  return parseInt(
    str
      .split("")
      .map((e) => parseInt(e))
      .sort((a, b) => b - a)
      .join("")
  );
}
