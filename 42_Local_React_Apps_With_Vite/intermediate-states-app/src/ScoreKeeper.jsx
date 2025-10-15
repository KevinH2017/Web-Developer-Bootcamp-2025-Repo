import { useState } from "react";

export default function ScoreKeeper() {
  // States can hold dictionaries
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
  function addOneP1() {
    setScores((oldScores) => {
      // Spread operator to make a copy of identity scores array to update scores value
      return { ...oldScores, p1Score: scores.p1Score + 1 };
    });
  }
  function addOneP2() {
    setScores((oldScores) => {
      // Spread operator to make a copy of identity scores array to update scores value
      return { ...oldScores, p2Score: scores.p2Score + 1 };
    });
  }
  return (
    <>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={addOneP1}>+1 Player 1</button>
      <button onClick={addOneP2}>+1 Player 2</button>
    </>
  );
}
