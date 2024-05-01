function solution(n) {
  const answer = [];
  const primes = new Array(n + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  for (let k = 2; k <= n; k++) {
    if (primes[k]) answer.push(k);
  }
  return answer.length;
}
