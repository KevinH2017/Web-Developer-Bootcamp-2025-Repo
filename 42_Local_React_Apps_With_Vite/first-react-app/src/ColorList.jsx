export default function ColorList({ colors }) {
  //   const lis = colors.map((color) => <li>{color}</li>);
  return (
    <div>
      <p>Color List</p>
      <ul>
        {/* <li>{lis}</li> */}
        {colors.map((c) => (
          <li style={{ color: c, fontSize: "35px" }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
