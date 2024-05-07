function solution(lottos, win_nums) {
  const answer = [];
  const rank = [6, 5, 4, 3, 2, 1];

  const countSameNum = lottos.filter((e) => win_nums.includes(e)).length;
  const countZero = lottos.filter((e) => e === 0).length;
  countSameNum === 0 && countZero === 0
    ? answer.push(6)
    : answer.push(rank[countSameNum - 1 + countZero]);
  countSameNum === 0 ? answer.push(6) : answer.push(rank[countSameNum - 1]);
  return answer;
}
