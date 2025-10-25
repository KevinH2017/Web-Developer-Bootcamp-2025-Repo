import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // useEffect always runs after the first render,
  // by default it will run after all re-renders
  useEffect(
    function myEffect() {
      console.log("My Effect Was Called!");
    },
    [count] // 2nd argument tells useEffect to only run when this changes, [ ] only runs on first render
  );
  const increment = () => {
    setCount((c) => c + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+ 1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}
