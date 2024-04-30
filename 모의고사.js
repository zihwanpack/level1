function grading(answers, solve) {
  let sum = 0;
  answers.filter((e, i) => {
    if (e === solve[i % solve.length]) sum++;
  });
  return sum;
}

function solution(answers) {
  const answer = [];
  const solve = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const results = solve.map((s) => grading(answers, s));

  for (let j = 0; j < 3; j++) {
    if (results[j] === Math.max(...results)) answer.push(j + 1);
  }
  return answer;
}
