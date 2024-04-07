function solution(absolutes, signs) {
  signs.forEach((e, i) => {
    if (e === false) {
      absolutes[i] *= -1;
    }
  });

  return absolutes.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}
