import { useState } from "react";
import ColorSquare from "./ColorSquare";
import "./ColorBoard.css";

const ColorBoard = () => {
  // Initialize a 5x5 grid with default colors.
  // We use a 2D array to represent the rows and columns.
  const [colors, setColors] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(5).fill("#ffffff")) // Default color is white
  );

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
    <div className="color-board">
      {colors.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <ColorSquare
            key={`${rowIndex}-${colIndex}`} // Use a unique, stable key
            color={color}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default ColorBoard;
