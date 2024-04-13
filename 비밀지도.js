function decryption(n, num) {
  let incomplete = num
    .toString(2)
    .padStart(n, "0")
    .replaceAll("0", " ")
    .replaceAll("1", "#");
  return incomplete;
}

function solution(n, arr1, arr2) {
  const mergedArr = [];
  let incomplete;
  const answer = [];
  for (let i = 0; i < n; i++) {
    mergedArr.push(arr1[i] | arr2[i]);
    incomplete = mergedArr.map((num) => decryption(n, num));
  }

  for (let j = 0; j < n; j++) {
    let mergedResult = "";

    for (let k = 0; k < n; k++) {
      if (incomplete[j][k] === "#") {
        mergedResult += "#";
      } else {
        mergedResult += " ";
      }
    }
    answer.push(mergedResult);
  }
  return answer;
}
