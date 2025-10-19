import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({ numBox = 9 }) {
  // Explicitly shows box states
  //   const [boxes, setBoxes] = useState([
  //     false,
  //     false,
  //     true,
  //     false,
  //     false,
  //     true,
  //     false,
  //     false,
  //     false,
  //   ]);
  //     const reset = () => {
  //     setBoxes([false, false, false, false, false, false, false, false, false]);
  //   };

  // Uses an array to create numBox of false values in a list
  const boxValue = Array(numBox).fill(false);
  const [boxes, setBoxes] = useState(boxValue);
  const reset = () => {
    setBoxes(boxValue);
  };
  // Toggles box value at a specific index
  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };
  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
