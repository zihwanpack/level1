function getDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function solution(numbers, hand) {
  let answer = '';
  let leftPosition = '*';
  let rightPosition = '#';
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      answer += 'L';
      leftPosition = number;
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R';
      rightPosition = number;
    } else {
      const leftDistance = getDistance(keypad[leftPosition], keypad[number]);
      const rightDistance = getDistance(keypad[rightPosition], keypad[number]);

      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === 'left')
      ) {
        answer += 'L';
        leftPosition = number;
      } else {
        answer += 'R';
        rightPosition = number;
      }
    }
  });

  return answer;
}
