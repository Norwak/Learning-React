import { useState } from "react";

export default function Player({name, symbol, activePlayer}) {
  const [modeName, newMode] = useState('display');
  const [playerName, newPlayerName] = useState(name);

  function changeMode() {
    if (modeName === 'display') {
      newMode('edit');
    } else {
      newMode('display');
    }
  }

  function changePlayerName(e) {
    newPlayerName(e.target.value);
  }
  
  let nameElement = <span className="player-name">{playerName}</span>;
  let buttonCaption = 'Edit';
  if (modeName === 'edit') {
    nameElement = <input className="player-name" value={playerName} onChange={changePlayerName}></input>;
    buttonCaption = 'Save';
  }

  return (
    <li className={(symbol === activePlayer) ? 'active' : ""}>
      <span className="player">
        {nameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeMode}>{buttonCaption}</button>
    </li>
  );
}