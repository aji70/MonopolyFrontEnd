// Minimalistic Monopoly Game UI in React
// import React from "react";

import Edges from "./pages/components/Edges";

const Monopoly = () => {
  //   const boardSpaces = [
  //     "Start",
  //     "Property 1",
  //     "Chance",
  //     "Property 2",
  //     "Jail",
  //     "Property 3",
  //     "Community Chest",
  //     "Property 4",
  //     "Go to Jail",
  //     "Property 5",
  //   ];

  //   const players = [
  //     { id: 1, name: "Player 1", position: 0 },
  //     { id: 2, name: "Player 2", position: 0 },
  //   ];

  return (
    <div className="game-container">
      <h1>Monopoly Game</h1>
      {/* 
      <div className="board">
        {boardSpaces.map((space, index) => (
          <div key={index} className="space">
            {space}
          </div>
        ))}
      </div>

      <div className="players">
        <h2>Players</h2>
        {players.map((player) => (
          <div key={player.id} className="player">
            {player.name} - Position: {player.position}
          </div>
        ))}
      </div>

      <div className="actions">
        <h2>Actions</h2>
        <button>Roll Dice</button>
        <button>Buy Property</button>
        <button>End Turn</button>
      </div> */}

      <Edges header={"PARKING"} image={"IMG"} footer={"FREE"} />
    </div>
  );
};

export default Monopoly;
