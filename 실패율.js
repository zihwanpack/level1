function solution(N, stages) {
  const failureRates = [];

  for (let i = 1; i <= N; i++) {
    const unclearNum = stages.filter((e) => e === i).length;
    const clearNum = stages.filter((e) => e >= i).length;
    failureRates.push([i, unclearNum / clearNum]);
  }

  failureRates.sort((a, b) => b[1] - a[1]);
  return failureRates.map((e) => e[0]);
}
