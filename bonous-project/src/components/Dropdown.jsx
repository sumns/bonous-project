import React, { useState } from "react";
import "../App.css"

export const Dropdown = ({ option, onselect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOption = option.filter(
    (option) => option.toLowerCase().
    includes(searchTerm.toLowerCase())
  );

  const handleSelet = (option) => {
    setSearchTerm("");
    setIsOpen(false);
    onselect(option);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search Super Hero's ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

        className="search-input"
      />
      <button
        style={{
          border: "none",
          width: "10vw",
          height: "5vh",
          backgroundColor: "tomato",
          marginLeft: "1rem",
          marginTop:"10px",
          
        }}
        className="search-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
       
        Select an Item
      </button>

      <hr/>

      {isOpen && (
        <ul className="dropdown-list">
          {filteredOption.map((option) => (
            <li
              style={{ fontSize: "1rem", listStyle: "none" ,cursor:"pointer", marginTop:"10px"}}
              key={option}
              onClick={() => handleSelet(option)}
            >
             <h2>{option}</h2> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
