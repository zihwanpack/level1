function solution(X, Y) {
  let answer = '-1';
  const xSet = new Set(X);
  const ySet = new Set(Y);
  const commonArray = [];
  const count = {};

  X.split('').forEach((char) => {
    count[char] = (count[char] || 0) + 1;
  });

  Y.split('').forEach((char) => {
    if (xSet.has(char) && count[char] > 0) {
      commonArray.push(char);
      count[char]--;
    }
  });

  if (commonArray.length > 0) {
    answer = commonArray.sort((a, b) => b - a).join('');
  }

  return !/^0*$/.test(answer) ? answer : '0';
}
