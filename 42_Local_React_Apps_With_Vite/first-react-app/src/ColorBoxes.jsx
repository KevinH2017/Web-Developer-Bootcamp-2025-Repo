import { useState } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

export default function ColorBoxes() {
  const [color, setColors] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(5).fill("white"))
  );
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  console.log(colors[randomColor]);
  const handleSquareClick = (rowIndex, colIndex) => {
    // A simple color change logic: cycle through a few preset colors.
    const newColors = [...colors];
    const currentColor = newColors[rowIndex][colIndex];

    // Example: Cycle through white, black, and blue
    if (currentColor === "#ffffff") {
      newColors[rowIndex][colIndex] = "#000000";
    } else if (currentColor === "#000000") {
      newColors[rowIndex][colIndex] = "#1f6a9e";
    } else {
      newColors[rowIndex][colIndex] = "#ffffff";
    }

    setColors(newColors);
  };

  return (
    <div className="color-boxes">
      <ColorBox colors={colors} />
    </div>
  );
}
