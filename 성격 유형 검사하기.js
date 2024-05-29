function solution(survey, choices) {
  const answer = new Map([
    ['R', 0],
    ['T', 0],
    ['C', 0],
    ['F', 0],
    ['J', 0],
    ['M', 0],
    ['A', 0],
    ['N', 0],
  ]);

  for (let i = 0; i < survey.length; i++) {
    const [disagreeType, agreeType] = survey[i];
    const choice = choices[i];

    if (choice < 4) {
      answer.set(disagreeType, answer.get(disagreeType) + (4 - choice));
    } else if (choice > 4) {
      answer.set(agreeType, answer.get(agreeType) + (choice - 4));
    }
  }

  let result = '';
  result += answer.get('R') >= answer.get('T') ? 'R' : 'T';
  result += answer.get('C') >= answer.get('F') ? 'C' : 'F';
  result += answer.get('J') >= answer.get('M') ? 'J' : 'M';
  result += answer.get('A') >= answer.get('N') ? 'A' : 'N';

  return result;
}
