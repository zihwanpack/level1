function getNumOfDivisor(num) {
  let result = 0;
  const sqrtNum = Math.sqrt(num);
  for (let j = 1; j <= sqrtNum; j++) {
    if (num % j === 0) {
      if (num / j === j) result++;
      else result += 2;
    }
  }
  return result;
}

function solution(number, limit, power) {
  const knights = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    knights.push(getNumOfDivisor(i));
  }
  knights.forEach((e) => {
    e > limit ? (e = power) : e;
    result += e;
  });
  return result;
}
