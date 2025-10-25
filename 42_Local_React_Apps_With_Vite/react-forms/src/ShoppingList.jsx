import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 8 },
    { id: uuid(), product: "Eggs", quantity: 12 },
  ]);

  const addItem = (item) => {
    // Returns a copy of the original items and make a new object that has the item passed in with a unique id
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      {/* <ShoppingListForm addItem={addItem} /> */}
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}
