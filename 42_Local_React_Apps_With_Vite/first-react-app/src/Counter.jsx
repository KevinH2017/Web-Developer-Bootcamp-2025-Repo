import { useState } from "react";

export default function Counter() {
  // useState is a React Hook that lets you add state to functional components.
  // It returns an array with two elements: the current state value and a function to update it.
  const [count, setCount] = useState(0);
  console.log("Component has been rendered");
  console.log(`Count is: ${count}`);
  // Function to increment the count state
  const incrementer = () => setCount(count + 1);

  return (
    <>
      <p>Count Is: {count}</p>
      <button onClick={incrementer}>Increment</button>
    </>
  );
}
