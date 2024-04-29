function solution(nums) {
  const answer = [];
  nums.forEach((e) => {
    if (!answer.includes(e) && answer.length !== nums.length / 2) {
      answer.push(e);
    }
  });
  return answer.length;
}
