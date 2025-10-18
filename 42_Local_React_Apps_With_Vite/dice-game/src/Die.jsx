import "./Die.css";

// Single die component and default color
export default function Die({ val, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val}
    </div>
  );
}
