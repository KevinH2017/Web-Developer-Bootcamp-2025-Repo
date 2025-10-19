import Die from "./Die";
import "./Dice.css";

// Uses Die.jsx to render a number of dice from App.jsx
export default function Dice({ dice, color }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}
