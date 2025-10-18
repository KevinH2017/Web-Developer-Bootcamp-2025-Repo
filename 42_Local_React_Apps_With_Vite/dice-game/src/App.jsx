import "./App.css";
import Lucky7 from "./Lucky7";
import Die from "./Die";
import Dice from "./Dice";
import LuckyN from "./LuckyN";

function App() {
  return (
    <>
      <h1>Dice Game</h1>
      <LuckyN numDice={4} goal={21} />
      <LuckyN numDice={4} goal={21} />
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[3, 6, 1]} color="red" />
      <Dice dice={[3, 6, 1]} color="blue" /> */}
      {/* <Die val={2} /> */}
      {/* <Lucky7 /> */}
    </>
  );
}

export default App;
