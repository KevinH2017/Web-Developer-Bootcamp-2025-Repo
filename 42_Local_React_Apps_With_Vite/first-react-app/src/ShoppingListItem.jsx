function ShoppingListItem({ id, item, quantity, isPurchased }) {
  const styles = {
    color: isPurchased ? "grey" : "red",
    textDecoration: isPurchased ? "line-through" : "none",
  };
  return (
    <li
      // Inline styles based on isPurchased prop
      style={styles}
      key={id}
    >
      {item} - {quantity} {isPurchased ? "✔" : "❌"}
      {/* {item} - {quantity} */}
    </li>
  );
}

export default ShoppingListItem;
