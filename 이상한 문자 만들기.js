function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word]
        .map((str, i) => {
          return i % 2 === 1 ? str.toLowerCase() : str.toUpperCase();
        })
        .join("")
    )
    .join(" ");
}
