import React from "react";

export const Stats = ({ players }) => {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>プレイヤー数:</td>
          <td>{totalPlayers} </td>
        </tr>
        <tr>
          <td>トータルポイント:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};
