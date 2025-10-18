import { useState } from "react";

// Default values numPlayers=3, target=5
export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  // Creates an array the size of numPlayers filled with 0
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  // Adds and tracks score to appropriate player without .map()
  // const addScore = (index) => {
  //   setScores((prevScore) => {
  //     const copy = [...prevScore];
  //     copy[index] += 1;
  //     return copy;
  //   });
  // };

  // Adds and tracks score to appropriate player with .map()
  const addScore = (index) => {
    setScores((prevScore) => {
      return prevScore.map((score, i) => {
        if (i == index) return (score += 1);
        return score;
      });
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <button onClick={() => addScore(index)}>+ 1</button>
              {score >= target && "You Win!"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </>
  );
}
