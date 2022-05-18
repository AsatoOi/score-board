import React from "react";

import { Icon } from "./Icon";
import { Counter } from "./Counter";

export const Player = ({
  name,
  id,
  score,
  index,
  removePlayer,
  changeScore,
  isHighScore
}) => {
  return (
    <div className="player">
      <div className="player-name">
        <button className="player-remove" onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
        {name}
      </div>
      <div className="player-score">
        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    </div>
  );
};
