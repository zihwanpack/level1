function solution(today, terms, privacies) {
  const answer = [];
  const todayDate = new Date(today);
  const termObj = {};

  for (let term of terms) {
    const [type, month] = term.split(' ');
    termObj[type] = Number(month);
  }

  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const [expire, termType] = privacy.split(' ');
    const expireDate = new Date(expire);
    expireDate.setMonth(expireDate.getMonth() + termObj[termType]);

    if (expireDate <= todayDate) {
      answer.push(i + 1);
    }
  }
  return answer;
}
