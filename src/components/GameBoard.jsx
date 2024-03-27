export default function GameBoard({gameBoard, triggerPlayerSwitch}) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
      <li>
        <ol>
          {row.map((playerSymbol, colIndex) => (
          <li>
            <button onClick={() => triggerPlayerSwitch(rowIndex, colIndex)} disabled={playerSymbol !== ""}>{playerSymbol}</button>
          </li>
          ))}
        </ol>
      </li>
      ))}
    </ol>
  );
}