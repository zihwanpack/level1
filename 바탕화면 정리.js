function solution(wallpaper) {
  const answer = [];
  const xArray = [];
  const yArray = [];

  wallpaper.forEach((line, x) => {
    for (let y = 0; y < line.length; y++) {
      if (line[y] === '#') {
        xArray.push(x);
        yArray.push(y);
      }
    }
  });

  answer.push(Math.min(...xArray));
  answer.push(Math.min(...yArray));
  answer.push(Math.max(...xArray) + 1);
  answer.push(Math.max(...yArray) + 1);

  return answer;
}
