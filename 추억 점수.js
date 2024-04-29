function solution(name, yearning, photo) {
  const answer = [];

  photo.forEach((arr) => {
    let sum = 0;
    arr.forEach((e) => {
      for (let j = 0; j < name.length; j++) {
        if (name[j] === e) {
          sum += yearning[j];
        }
      }
    });
    answer.push(sum);
  });

  return answer;
}
