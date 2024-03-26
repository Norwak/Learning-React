import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  let [turnsLog, newTurnsLog] = useState([]);
  turnsLog = structuredClone(turnsLog);
  const [activePlayer, newActivePlayer] = useState('X');

  function passTurn(rowIndex, colIndex) {
    newActivePlayer(activePlayer !== 'X' ? 'X' : 'O');

    let currentPlayer = 'X';
    if (turnsLog.length > 0 && turnsLog[0].player === 'X') {
      currentPlayer = 'O';
    }
    newTurnsLog([
      {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
      ...turnsLog
    ]);
  }

  return (
    <main>

      <div id="game-container">
        <ol className="highlight-player" id="players">
          <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
          <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
        </ol>

        <GameBoard turnsLog={turnsLog} triggerPlayerSwitch={passTurn}/>
      </div>

      <Log turnsLog={turnsLog} />
      
    </main>
  )
}

export default App
