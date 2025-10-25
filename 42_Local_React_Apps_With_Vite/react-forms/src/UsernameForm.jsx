import { useState } from "react";

export default function UsernameForm() {
  // Holds username value from form
  const [username, setUsername] = useState("");
  // When user types into username text box, event gets and sets target value as username
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Enter a username: </label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}
