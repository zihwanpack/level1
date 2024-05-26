function solution(players, callings) {
  const playerObj = {};

  for (let i = 0; i < players.length; i++) {
    const currentPlayer = players[i];
    playerObj[currentPlayer] = i;
  }

  for (let j = 0; j < callings.length; j++) {
    const currentPlayer = callings[j];
    const index = playerObj[currentPlayer];

    [players[index - 1], players[index]] = [players[index], players[index - 1]];

    playerObj[currentPlayer] = index - 1;
    playerObj[players[index]] = index;
  }

  return players;
}
