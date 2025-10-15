import "./ColorSquare.css";

const ColorSquare = ({ color, onClick }) => {
  return (
    <div
      className="color-square"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default ColorSquare;
