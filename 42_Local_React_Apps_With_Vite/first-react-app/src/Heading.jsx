export default function Heading({
  color = "olive",
  text = "test",
  fontSize = "12px",
}) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
}
