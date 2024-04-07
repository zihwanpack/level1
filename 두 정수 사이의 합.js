function solution(a, b) {
  let result = 0;
  let temp;

  if (b < a) {
    temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}
