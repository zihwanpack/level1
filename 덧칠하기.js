function solution(n, m, section) {
  const wall = new Array(n).fill(0);
  let answer = 0;

  section.forEach((wallIndex) => (wall[wallIndex - 1] = 1));

  for (let i = 0; i < wall.length; i++) {
    if (wall[i] === 1) {
      answer++;
      i += m - 1;
    }
  }

  return answer;
}
