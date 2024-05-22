function solution(players, callings) {
  // 처음 배열로 접근했으나 O(n^2)라 시간초과함
  // callings.forEach((calling) => {
  //   players.forEach((player, index) => {
  //     if (calling === player && index > 0) {
  //       [
  //         players[index - 1],
  //         (players[index] = players[index]),
  //         players[index - 1],
  //       ];
  //     }
  //   });
  // });
  // return players;
}
