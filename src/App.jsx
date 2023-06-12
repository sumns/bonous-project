import React, { useState } from "react";
import emojiDictionary from "emoji-dictionary";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getEmoji = () => {
    const emoji = emojiDictionary.getUnicode(searchTerm);
    if (emoji) {
      return emoji;
    } else {
      return "Emoji not found";
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Emoji Search App</h1>
        <input
          type="text"
          placeholder="Search for an emoji"
          value={searchTerm}
          onChange={handleSearch}
        />
        <h1>{getEmoji()}</h1>
      </div>
    </div>
  );
};

export default App;
