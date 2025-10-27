import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function RatingDemo() {
  // Default ratings
  const [score, setScore] = useState(3);
  const [precisionScore, setPrecisionScore] = useState(2.5);
  return (
    <div>
      <h1>Rating Demo</h1>
      <h2>Current Rating: {score}</h2>
      <Rating
        name="simple-uncontrolled"
        value={score}
        onChange={(event, newValue) => {
          console.log(newValue);
          setScore(newValue);
        }}
        defaultValue={3}
      />
      <br />
      <h1>0.5 Precision Rating Demo</h1>
      <h2>Current Rating: {precisionScore}</h2>
      <Rating
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={precisionScore}
        onChange={(eventPrecise, newPrecise) => {
          console.log(newPrecise);
          setPrecisionScore(newPrecise);
        }}
      />
    </div>
  );
}
