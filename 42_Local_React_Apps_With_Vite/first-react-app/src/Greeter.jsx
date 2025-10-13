export default function Greeter({ person = "everyone", from = "anonymous" }) {
  console.log(person);
  return (
    <>
      <h1>Hello {person}!</h1>
      <h2>- {from}</h2>
    </>
  );
}
