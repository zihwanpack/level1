function solution(s) {
  let answer;
  let pCount = 0;
  let yCount = 0;

  s.split("").forEach((e) => {
    if (e === "p" || e === "P") pCount++;
    else if (e === "y" || e === "Y") yCount++;
  });

  return pCount === yCount ? (answer = true) : (answer = false);
}
