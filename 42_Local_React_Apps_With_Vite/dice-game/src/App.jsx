import "./App.css";
import Lucky7 from "./Lucky7";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
import { sum } from "./Utils.js";

function lessThanFour(dice) {
  return sum(dice) < 4;
}

function App() {
  return (
    <>
      <h1>Dice Game</h1>
      <LuckyN numDice={3} winCheck={10} />
      <LuckyN numDice={3} winCheck={lessThanFour} />
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[3, 6, 1]} color="red" />
      <Dice dice={[3, 6, 1]} color="blue" /> */}
      {/* <Die val={2} /> */}
      {/* <Lucky7 /> */}
    </>
  );
}

export default App;
