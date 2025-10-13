import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul style={{ fontSize: "30px" }}>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          item={i.item}
          quantity={i.quantity}
          isPurchased={i.isPurchased}
        />

        // Using the ShoppingListItem component for each item with the spread operator to pass props
        // <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}

export default ShoppingList;
