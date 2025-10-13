// Mozilla Developer Network (MDN) DOM Events with React tutorial example
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state

// function handleClick() {
//   console.log("Clicked!");
// }

// function handleHover() {
//   console.log("Hovered!");
// }

export default function Clicker({ message, buttonText }) {
  const handleClick = () => {
    alert(message);
  };
  return (
    <>
      {/* <p onMouseOver={handleHover}>Hover Over Me</p>
      <button onClick={handleClick}>Click</button> */}
      <button onClick={handleClick}>{buttonText}</button>

      {/* Makes a new function */}
      {/* <button onClick={() => alert(message)}>{buttonText}</button> */}
    </>
  );
}
