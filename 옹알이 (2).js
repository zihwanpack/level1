function solution(babbling) {
  let answer = 0;
  const words = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let isWords;
    for (let j = 0; j < words.length; j++) {
      if (babbling[i].includes(words[j].repeat(2))) {
        isWords = false;
        break;
      } else {
        babbling[i] = babbling[i].split(words[j]).join(" ");
        isWords = true;
      }
    }
    if (isWords && babbling[i].trim() === "") answer++;
  }
  return answer;
}
