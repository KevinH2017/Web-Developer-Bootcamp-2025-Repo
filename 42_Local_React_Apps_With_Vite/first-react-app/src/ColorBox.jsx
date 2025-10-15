import { useState } from "react";
import "./ColorBox.css";

function randColor(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function ColorBox({ colors }) {
  // The ColorBox component represents a colored square that can be clicked to change its color.
  const [color, setColor] = useState("red");
  const changeColor = () => {
    const randomColor = randColor(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}
