function solution(a, b, n) {
  if (n < a) return 0;
  const colaCount = Math.floor(n / a) * b;
  return colaCount + solution(a, b, colaCount + (n % a));
}
