import { useState } from "react";
import { getRolls } from "./Utils";
import Dice from "./Dice";
import "./Button.css";

export default function LuckyN({ numDice = 2, winCheck }) {
  // Creates a state for values of N dice
  const [dice, setDice] = useState(getRolls(numDice));

  // Winning dice sum is equal to target
  const isWinner = winCheck(dice);

  // Re-rolls the dice
  const roll = () => {
    setDice(getRolls(numDice));
  };

  return (
    <main className="LuckyN">
      {<h1>{isWinner && "You Win!"}</h1>}
      <Dice dice={dice} />
      <button onClick={roll} className="Button">
        Re-Roll Dice
      </button>
    </main>
  );
}
