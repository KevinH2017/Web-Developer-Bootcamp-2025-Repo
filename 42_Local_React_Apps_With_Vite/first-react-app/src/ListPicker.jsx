export default function ListPicker({ values }) {
  const randIndex = Math.floor(Math.random() * values.length);
  const randElement = values[randIndex];
  return (
    <>
      <h1>The list of values: {values.join(" ")}</h1>
      <h1>Randomly selected: {randElement}</h1>
    </>
  );
}
