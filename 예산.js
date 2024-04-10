function solution(d, budget) {
  let result = 0;
  const sortedArr = d.sort((a, b) => a - b);
  sortedArr.forEach((item) => {
    budget -= item;
    if (budget >= 0) {
      result++;
    }
  });
  return result;
}
