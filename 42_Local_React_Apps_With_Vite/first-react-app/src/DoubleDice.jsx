export default function DoubleDice() {
  const rand1 = Math.floor(Math.random() * 6) + 1;
  const rand2 = Math.floor(Math.random() * 6) + 1;
  const isWinner = rand1 === rand2;
  //   const result = isWinner ? "You Win!" : "You Lose!";
  const styles = { color: isWinner ? "green" : "red", fontSize: "16px" };
  return (
    <div className="DoubleDice" style={styles}>
      <h1>Double Dice</h1>
      {/* <h2>{result}</h2> */}
      {/* <h2>result = isWinner ? "You Win!"</h2> */}
      {/* {isWinner ? <h2>You Win!</h2> : null} */}
      {isWinner ? <h2>You Win!</h2> : <h2>You Lose!</h2>}
      <p>First die: {rand1}</p>
      <p>Second die: {rand2}</p>
    </div>
  );
}
