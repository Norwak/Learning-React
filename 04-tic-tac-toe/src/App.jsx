import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combonations";
import GameOver from "./components/GameOver";

const DEFAULT_PLAYER_NAMES = {
  X: 'Player 1',
  O: 'Player 2',
}

function deriveActivePlayer(turnsLog) {
  let currentPlayer = 'X';
  if (turnsLog.length > 0 && turnsLog[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(turnsLog) {
  const gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (const {square, player} of turnsLog) {
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = '';
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = players[firstSymbol];
    }
  }
  return winner;
}

function App() {
  let [players, newPlayers] = useState(DEFAULT_PLAYER_NAMES);
  let [turnsLog, newTurnsLog] = useState([]);

  players = structuredClone(players);
  turnsLog = structuredClone(turnsLog);

  const activePlayer = deriveActivePlayer(turnsLog);
  const gameBoard = deriveGameBoard(turnsLog);
  const winner = deriveWinner(gameBoard, players);

  const hasDraw = turnsLog.length === 9 && !winner;

  function passTurn(rowIndex, colIndex) {
    const currentPlayer = deriveActivePlayer(turnsLog);
    newTurnsLog([
      {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
      ...turnsLog
    ]);
  }

  function changePlayerName(symbol, newName) {
    newPlayers({
      ...players,
      [symbol]: newName,
    });
  }

  function newGame() {
    newTurnsLog([]);
  }

  return (
    <main>

      <div id="game-container">
        <ol className="highlight-player" id="players">
          <Player name={DEFAULT_PLAYER_NAMES.X} symbol="X" activePlayer={activePlayer} changeNameEvent={changePlayerName}/>
          <Player name={DEFAULT_PLAYER_NAMES.O} symbol="O" activePlayer={activePlayer} changeNameEvent={changePlayerName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} resetEvent={newGame} />}
        <GameBoard gameBoard={gameBoard} triggerPlayerSwitch={passTurn}/>
      </div>

      <Log turnsLog={turnsLog} />
      
    </main>
  )
}

export default App
