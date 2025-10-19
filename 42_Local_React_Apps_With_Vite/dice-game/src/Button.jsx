import "./Button.css";

// Creates a button with passed function and label from parent component
export default function Button({ clickFunc, label }) {
  return (
    <button onClick={clickFunc} className="Button">
      {label}
    </button>
  );
}
