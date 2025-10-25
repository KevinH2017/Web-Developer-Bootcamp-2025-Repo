import { useState } from "react";

export default function SignupForm() {
  // Holds first and last names
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // When user types into username text box, event gets and sets target value as username
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };
  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={updateFirstName}
      />
      <br />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={updateLastName}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
