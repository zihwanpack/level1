function solution(X, Y) {
  const xSet = new Set(X);
  const commonArr = [];

  const count = new Map();
  X.forEach((e) => {
    count.set(e, (count.get(e) || 0) + 1);
  });

  Y.forEach((e) => {
    if (xSet.has(e) && count.has(e) && count.get(e) > 0) {
      commonArr.push(e);
      count.set(e, count.get(e) - 1);
    }
  });

  if (commonArr.length > 0) {
    const sortedCommon = commonArr.sort((a, b) => b - a);
    return sortedCommon.join('');
  } else {
    return '0';
  }
}
