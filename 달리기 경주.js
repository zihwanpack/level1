function solution(players, callings) {
  const playerObj = {};

  for (let i = 0; i < players.length; i++) {
    const currentPlayer = players[i];
    playerObj[currentPlayer] = i;
  }

  for (let j = 0; j < callings.length; j++) {
    const currentPlayer = callings[j];
    const rank = playerObj[currentPlayer];

    [players[rank - 1], players[rank]] = [players[rank], players[rank - 1]];

    playerObj[currentPlayer] = rank - 1;
    playerObj[players[rank]] = rank;
  }

  return players;
}
