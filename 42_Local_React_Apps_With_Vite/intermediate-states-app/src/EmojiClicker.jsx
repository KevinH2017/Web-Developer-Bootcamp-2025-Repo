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
    // Delete emoji with the specified id
    setEmojis((preEmojis) => {
      // Creates copy list of emojis and filters for the specified emoji to not be added to the new list of emojis
      return preEmojis.filter((e) => e.id != id);
    });
  };
  const allHeartEmoji = () => {
    // Updates all elements to the same element at once
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "❤" };
      });
    });
  };
  return (
    <div>
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
      <br />
      <button onClick={allHeartEmoji}>Make All Emojis Hearts</button>
    </div>
  );
}
