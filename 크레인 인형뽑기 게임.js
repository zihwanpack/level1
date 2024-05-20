function solution(board, moves) {
  const stack = [];
  let count = 0;

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        const pickedItem = board[i][move - 1];
        board[i][move - 1] = 0;

        if (stack.length > 0 && stack[stack.length - 1] === pickedItem) {
          stack.pop();
          count += 2;
        } else {
          stack.push(pickedItem);
        }
        break;
      }
    }
  }
  return count;
}
