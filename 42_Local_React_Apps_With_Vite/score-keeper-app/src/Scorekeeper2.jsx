import { useState } from "react";

export default function ScoreKeeper2({ numPlayers, target }) {
  // list of players
  // const playersList = [0, 0, 0, 0];
  const score = 0;
  const playersList = Array.from(Array(numPlayers).keys(score));

  const [scores, setScores] = useState({ players: 0, targetScore: 0 });

  // Adds score to player
  function addScore() {
    setScores((oldScores) => {
      return { ...oldScores, players: scores.players + 1 };
    });
  }

  const isWinner = scores.players == target;

  return (
    <>
      <ul>
        {playersList.map((n, p) => (
          <>
            <li>
              Player {p + 1}: {n}
            </li>
            <button onClick={() => addScore()}>+ 1</button>
          </>
        ))}
      </ul>
      <button onClick={addScore}>+1 Score</button>
      {isWinner ? <p>You Win!</p> : null}
    </>
  );
}
