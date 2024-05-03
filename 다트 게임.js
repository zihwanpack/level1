function solution(dartResult) {
  const tmp = [];
  const arr = dartResult.split("");
  let num;
  arr.forEach((e, i) => {
    if (!isNaN(Number(e))) {
      num = Number(arr[i - 1]) === 1 ? 10 : Number(e);
    } else if (e === "S") {
      tmp.push(num);
    } else if (e === "D") {
      tmp.push(Math.pow(num, 2));
    } else if (e === "T") {
      tmp.push(Math.pow(num, 3));
    } else if (e === "*") {
      tmp[tmp.length - 2] *= 2;
      tmp[tmp.length - 1] *= 2;
    } else if (e === "#") {
      tmp[tmp.length - 1] *= -1;
    }
  });
  return tmp.reduce((acc, cur) => acc + cur, 0);
}
