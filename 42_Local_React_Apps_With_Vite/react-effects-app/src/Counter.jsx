import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // useEffect always runs after the first render,
  // by default it will run after all re-renders
  useEffect(function myEffect() {
    console.log("My Effect Was Called!");
  });
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+ 1</button>
    </div>
  );
}
