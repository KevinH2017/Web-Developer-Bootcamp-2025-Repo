import "./App.css";
import ScoreKeeper from "./ScoreKeeper";

function App() {
  return (
    <>
      <ScoreKeeper numPlayers={4} target={3} />
    </>
  );
}

export default App;
