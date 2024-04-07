function solution(x) {
  let str = x + "";
  let sum = 0;
  [...str].forEach((e) => {
    sum += parseInt(e);
  });
  return x % sum === 0 ? true : false;
}
