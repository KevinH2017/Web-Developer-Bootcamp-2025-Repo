import { useState } from "react";
import "./CenterBox.css";

export default function BetterSignupForm() {
  // Object holding form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  // Changes the value of an event from changedField to newValue
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  // Console log of submitted form data
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="center">
      <h1>Signup Form</h1>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <br />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
