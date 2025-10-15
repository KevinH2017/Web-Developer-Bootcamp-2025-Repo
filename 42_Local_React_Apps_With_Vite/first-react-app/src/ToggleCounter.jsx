import { useState } from "react";
import "./Toggler.css";

export default function TogglerCounter() {
  // State variable to track if the face is happy or sad
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  // State variable to track the count
  const [count, setCount] = useState(0);
  const incrementer = () => setCount(count + 1);

  // Conditional rendering based on the isHappy state
  return (
    <>
      <button className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "🙂" : "😢"}
      </button>
      <p style={{ fontSize: "18px" }}>{count}</p>
      <button onClick={incrementer}>+</button>
    </>
  );
}
