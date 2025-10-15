import { useState } from "react";

function generateBoard() {
  console.log("Making Initial Board");
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateBoard);
  return (
    <button onClick={() => setBoard("Hello!")}>Click me to change state</button>
  );
}
