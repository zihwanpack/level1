function solution(ingredient) {
  let count = 0;
  const hamburger = '1231';

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === hamburger) {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return count;
}
