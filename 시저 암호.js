function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let ascciCode = s.charCodeAt(i);
    let nextCode = ascciCode + n;
    if (s[i] === " ") result += " ";
    else {
      if (ascciCode <= 90) {
        if (nextCode > 90) nextCode -= 26;
      } else {
        if (nextCode > 122) nextCode -= 26;
      }
      result += String.fromCharCode(nextCode);
    }
  }
  return result;
}
