function solution(n, lost, reserve) {
  const realReserve = reserve
    .filter((e) => !lost.includes(e))
    .sort((a, b) => a - b);
  const realLost = lost
    .filter((e) => !reserve.includes(e))
    .sort((a, b) => a - b);
  let answer = n - realLost.length;

  for (let i of realLost) {
    for (let j of realReserve) {
      if (Math.abs(i - j) === 1) {
        realReserve.splice(realReserve.indexOf(j), 1);
        answer++;
        break;
      }
    }
  }
  return answer;
}
