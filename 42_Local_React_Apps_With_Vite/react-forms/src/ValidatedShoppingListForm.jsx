// Manually creating input validation for shopping list form

import { useState } from "react";
import "./ShoppingListStyles.css";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);

  // Validates if the product name is greater than 0
  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };

  // Assigns a name an associated value (ex: product and quantity)
  const handleChange = (evt) => {
    if (evt.target.name === "product") {
      validate(evt.target.value);
    }
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  // Passes form information on submit to ShoppingList.jsx (ex: product and quantity)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Submitted! Product: " +
        formData.product +
        ", Quantity: " +
        formData.quantity
    );
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name: </label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <br />
      {!productIsValid && (
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}
      <br />
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <br />
      <button disabled={!productIsValid}>Add Item</button>
    </form>
  );
}
