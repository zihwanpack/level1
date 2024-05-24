function solution(park, routes) {
  const answer = [];
  let x = 0,
    y = 0;

  park.forEach((row, i) => {
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 'S') {
        x = i;
        y = j;
        break;
      }
    }
  });

  const isValidMove = (newX, newY) => {
    return (
      newX >= 0 &&
      newX < park.length &&
      newY >= 0 &&
      newY < park[0].length &&
      park[newX][newY] !== 'X'
    );
  };

  for (let route of routes) {
    const [direction, stepStr] = route.split(' ');
    const steps = Number(stepStr);
    let newX = x,
      newY = y;
    let valid = true;

    for (let i = 0; i < steps; i++) {
      if (direction === 'N') {
        newX--;
      } else if (direction === 'S') {
        newX++;
      } else if (direction === 'W') {
        newY--;
      } else if (direction === 'E') {
        newY++;
      }

      if (!isValidMove(newX, newY)) {
        valid = false;
        break;
      }
    }

    if (valid) {
      x = newX;
      y = newY;
    }
  }

  answer.push(x, y);

  return answer;
}
