import { useState } from "react";
import { getRolls, sum } from "./Utils";
import "./lucky7.css";
import "./Box.css";
import "./Die.css";

export default function Lucky7() {
  // Creates a state for dice values
  const [dice, setDice] = useState(getRolls(2));
  // Winning dice sum is equal to target
  const won = sum(dice) === 7;

  // Creates an array from dice rolls
  function roll() {
    setDice(getRolls(2));
  }

  return (
    <main className="lucky7">
      <h1>Lucky 7s {won && "You Won!"}</h1>
      <section className="Lucky7-dice">
        <div className="lucky7-die">{dice[0]}</div>
        <div className="lucky7-die">{dice[1]}</div>
      </section>
      <button onClick={roll}>Roll Again!</button>
    </main>
  );
}
