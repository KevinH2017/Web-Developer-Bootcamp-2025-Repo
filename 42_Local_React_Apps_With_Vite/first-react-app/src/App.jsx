import "./App.css";

// --- IGNORE ---
// Importing various components (currently commented out)
// Uncomment these imports when you want to use the respective components
// import Chicken from "./Chicken";
// import Greeter from "./Greeter";
// import Die from "./Die";
// import ListPicker from "./ListPicker";
// import DoubleDice from "./DoubleDice";
// import Heading from "./Heading";
// import ColorList from "./ColorList";
// import PropertyList from "./PropertyList";
// import ShoppingList from "./ShoppingList";
// import Clicker from "./Clicker";
// import Form from "./Form";
// import Counter from "./Counter";
// import Toggler from "./Toggler";
// import TogglerCounter from "./ToggleCounter";
// import ColorBoard from "./ColorBoard";
// import ColorSquare from "./ColorSquare";
// import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

// Sample data for the ShoppingList component
// const data = [
//   { id: 1, item: "egg", quantity: 12, isPurchased: false },
//   { id: 2, item: "milk", quantity: 1, isPurchased: true },
//   { id: 3, item: "bread", quantity: 2, isPurchased: false },
//   { id: 4, item: "banana", quantity: 6, isPurchased: true },
// ];

// Sample data for the PropertyList component
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

// List of colors to be used in the ColorBoxGrid component
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/* <ColorBox colors={colors} /> */}

      {/* <ColorBoard />
      <ColorSquare
        color="teal"
        onClick={() => alert("You clicked the teal square!")}
      /> */}
      {/* <ColorBoxes /> */}
      {/* <TogglerCounter /> */}
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Clicker message="Hello from App" buttonText="Click Me" />
      <Clicker message="Another message" buttonText="Second Button" /> */}
      {/* <Form /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Heading color="magenta" text="Welcome to My Site" fontSize="18px" />
      <Heading color="teal" text="Heading Text" fontSize="20px" /> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <ColorList colors={["red", "green", "blue", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} /> */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["apple", "banana", "cherry"]} /> */}
      {/* Chicken says: <Chicken /> */}
      <br />
      {/* <Greeter from="Colt" />
      <Greeter person="Ted" />
      <Greeter person="Rosa" from="Elton" /> */}
      {/* <Die numSides={20} />
      <Die numSides={10} />
      <Die numSides={6} /> */}
    </div>
  );
}

export default App;
