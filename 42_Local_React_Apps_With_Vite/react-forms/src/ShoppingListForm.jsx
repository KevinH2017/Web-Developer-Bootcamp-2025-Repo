import { useState } from "react";
import "./ShoppingListStyles.css";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  // Assigns a name an associated value (ex: product and quantity)
  const handleChange = (evt) => {
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
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
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
      <button>Add Item</button>
    </form>
  );
}
