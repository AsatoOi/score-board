import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { AddPlayer } from "./components/AddPlayer";

export const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "大井",
      id: 1,
      score: 0,
    },
    {
      name: "湯浅",
      id: 2,
      score: 0,
    },
    {
      name: "池田",
      id: 3,
      score: 0,
    },
  ]);
  const [playerId, setPlayerId] = useState(4);
  const [highestScore, setHighestScore] = useState();
  console.log(players);

  const handleScoreChange = (index, delta) => {
    let newState = [...players];
    newState[index].score += delta;
    let scores = players.map((p) => p.score);
    let highScore = Math.max(...scores);
    setPlayers(newState);
    if (highScore) {
      setHighestScore(highScore);
    } else {
      return null;
    }
  };

  const handleRemovePlayer = (id) => {
    let newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevState) => {
      return [
        ...prevState,
        {
          name,
          id: playerId,
          score: 0,
        },
      ];
    });
    setPlayerId(playerId + 1);
  };

  return (
    <div className="App">
      <Header title="Scoreboard app" players={players} />
      <div className="players-list">
        {players.map((player, index) => (
          <Player
            id={player.id}
            index={index}
            score={player.score}
            changeScore={handleScoreChange}
            name={player.name}
            key={player.id.toString()}
            removePlayer={handleRemovePlayer}
            isHighScore={highestScore === player.score}
          />
        ))}
        <AddPlayer addPlayer={handleAddPlayer} />
      </div>
    </div>
  );
};
