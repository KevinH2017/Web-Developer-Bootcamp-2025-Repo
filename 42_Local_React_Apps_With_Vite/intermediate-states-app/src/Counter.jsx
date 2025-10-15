import { useState } from "react";

export default function Counter() {
  console.log("Rendered");
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    setCount(count + 3);
    // Updater function to update state value with callback function to re-render the state variable's value at the end
    // setCount((current) => current + 1);
    // setCount((current) => current + 1);
    // setCount((current) => current + 1);
  };
  // Checks if state is already 10, if it is, React will not re-render setToTen
  const setToTen = () => {
    setCount(10);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <br />
      <button onClick={addThree}>+3</button>
      <br />
      <button onClick={setToTen}>Set to 10</button>
    </>
  );
}
