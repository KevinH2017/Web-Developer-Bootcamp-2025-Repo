import "./Box.css";

export default function Box({ isActive, toggle }) {
  return (
    <div
      onClick={toggle}
      class="Box"
      style={{ backgroundColor: isActive ? "blue" : "black" }}
    ></div>
  );
}
