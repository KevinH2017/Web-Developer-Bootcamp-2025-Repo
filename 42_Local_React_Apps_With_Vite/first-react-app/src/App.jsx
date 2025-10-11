import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return (
    <div>
      {/* <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" from="Colt" />
      <Greeter person="Rosa" from="Elton" /> */}
      <Die numSides={20} />
      <Die numSides={10} />
      <Die numSides={6} />
    </div>
  );
}

export default App;
