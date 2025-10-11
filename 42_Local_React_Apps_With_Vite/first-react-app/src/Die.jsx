export default function Die({ numSides }) {
  const roll = Math.floor(Math.random() * numSides) + 1;
  console.log(roll);
  return (
    <p>
      {numSides}-sided die roll: {roll}
    </p>
  );
}
