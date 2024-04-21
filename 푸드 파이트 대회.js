function solution(food) {
  const result = [];
  food.forEach((e, i) => {
    result.push(String(i).repeat(Math.floor(e / 2)));
  });
  return result.join("") + "0" + result.reverse().join("");
}
