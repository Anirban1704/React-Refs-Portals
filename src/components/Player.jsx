import React from "react";
import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  // const [enteredPlayerName, setenteredPlayerName] = useState();

  function handleSetNameClick() {
    // setenteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {playerName.current ? playerName.current.value : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetNameClick}>Set Name</button>
      </p>
    </section>
  );
}
