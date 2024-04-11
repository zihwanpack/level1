function solution(array, commands) {
  const result = [];
  commands.map((command) => {
    const sortedArr = array
      .slice(command[0] - 1, command[1])
      .sort((a, b) => a - b);
    result.push(sortedArr[command[2] - 1]);
  });
  return result;
}
