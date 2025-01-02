// Minimalistic Monopoly Game UI in React
// import React from "react";

import MiddlePart from "./components/MiddlePart";
import TopLayer from "./components/TopLayer";

const Monopoly = () => {
  return (
    <div className="game-container">
      <h1>Monopoly Game</h1>
      <TopLayer />
      <MiddlePart />
    </div>
  );
};

export default Monopoly;
