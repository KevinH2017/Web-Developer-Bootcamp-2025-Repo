import "./App.css";
import Lucky7 from "./Lucky7";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";
// import { sum } from "./Utils.js";
import Box from "./Box.jsx";
import BoxGrid from "./BoxGrid.jsx";

// Function to pass as a prop for winCheck in LuckyN element
// function lessThanFour(dice) {
//   return sum(dice) < 4;
// }

// function allSame(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <>
      <BoxGrid numBox={15} />

      {/* <h1>Dice Games</h1>
      <h2>Roll Less Than Four</h2>
      <LuckyN numDice={2} winCheck={lessThanFour} />
      <h2>Roll Same Numbers</h2>
      <LuckyN numDice={2} winCheck={allSame} /> */}

      {/* <LuckyN numDice={2} winCheck={10} /> */}
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[3, 6, 1]} color="red" />
      <Dice dice={[3, 6, 1]} color="blue" /> */}
      {/* <Die val={2} /> */}
      {/* <Lucky7 /> */}
    </>
  );
}

export default App;
