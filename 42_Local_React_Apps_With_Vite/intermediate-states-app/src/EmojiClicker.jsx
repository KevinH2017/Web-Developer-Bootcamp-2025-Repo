import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmoji() {
  const choices = ["⭐", "🐱‍🐉", "🎂", "🙂", "😒", "😢", "😊"];
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  // Assigns each emoji with a Universally Unique Identifier(uuid)
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmoji() },
    ]);
  };
  const deleteEmoji = (id) => {
    // Delete emoji with the id
    setEmojis((preEmojis) => {
      return preEmojis.filter((e) => e.id != id);
    });
  };
  return (
    <>
      {emojis.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <br />
      <button onClick={addEmoji}>Add Emoji</button>
    </>
  );
}
