import './style.css'
import React, { useState } from "react";

function PixelToRem() {
  const [pixelValue, setPixelValue] = useState(16);


  const handlePixelChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPixelValue(newValue);
  };

  const remValue = pixelValue / 16;



  return (
    <div className="innerBox">
      <label htmlFor="pixel-input">Enter pixel value: </label>

      <input
        id="pixel-input"
        type="number"
        value={pixelValue}
        onChange={handlePixelChange}
      />
      <p>{pixelValue} px = {remValue} rem</p>
    </div>
  );
}

export default PixelToRem;

