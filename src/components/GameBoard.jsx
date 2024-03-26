export default function GameBoard({turnsLog, triggerPlayerSwitch}) {
  let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  for (const {square, player} of turnsLog) {
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  // let [gameBoard, newGameBoard] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);
  // gameBoard = structuredClone(gameBoard);

  // function endTurn(x, y) {
  //   gameBoard[x][y] = activePlayer;
  //   newGameBoard(gameBoard);
  //   triggerPlayerSwitch();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
      <li>
        <ol>
          {row.map((col, colIndex) => (
          <li>
            <button onClick={() => triggerPlayerSwitch(rowIndex, colIndex)}>{col}</button>
          </li>
          ))}
        </ol>
      </li>
      ))}
    </ol>
  );
}