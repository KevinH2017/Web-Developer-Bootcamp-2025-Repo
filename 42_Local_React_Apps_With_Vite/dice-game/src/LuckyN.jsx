import { useState } from "react";
import { getRolls, sum } from "./Utils";
import Dice from "./Dice";
import "./Button.css";

export default function LuckyN({ numDice = 2, goal = 7 }) {
  // Creates a state for dice value
  const [dice, setDice] = useState(getRolls(numDice));

  // Winning dice sum is equal to target
  const isWinner = sum(dice) === goal;

  // Re-rolls the dice
  const roll = () => {
    setDice(getRolls(numDice));
  };

  return (
    <main className="LuckyN">
      <h1>
        Lucky{goal} {isWinner && "You Win!"}
      </h1>
      <Dice dice={dice} />
      <button onClick={roll} className="Button">
        Re-Roll Dice
      </button>
    </main>
  );
}
