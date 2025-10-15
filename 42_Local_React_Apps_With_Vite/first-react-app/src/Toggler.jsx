import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  // State variable to track if the face is happy or sad
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  // Conditional rendering based on the isHappy state
  return (
    <button className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? "🙂" : "😢"}
    </button>
  );
}
