import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const inputElem = useRef();
  const [playerName, newPlayerName] = useState('');

  function buttonClick() {
    newPlayerName(inputElem.current.value);
    inputElem.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName || 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputElem} />
        <button onClick={buttonClick}>Set Name</button>
      </p>
    </section>
  );
}
