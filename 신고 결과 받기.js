function solution(id_list, report, k) {
  const answer = [];
  const reportObj = {};
  const countObj = {};

  id_list.forEach((id) => {
    reportObj[id] = [];
    countObj[id] = 0;
  });

  report.forEach((list) => {
    const [reportingId, reportedId] = list.split(' ');
    if (!reportObj[reportingId].includes(reportedId)) {
      reportObj[reportingId].push(reportedId);
    }
  });

  for (const reportedId in reportObj) {
    for (const reportingId of reportObj[reportedId]) {
      countObj[reportingId]++;
    }
  }

  for (const reportingId in reportObj) {
    let count = 0;
    for (const reportedId of reportObj[reportingId]) {
      if (countObj[reportedId] >= k) {
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
}
