import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button 
      onClick={() => setIsOn(!isOn)}
      style={{
        backgroundColor: isOn ? "black" : "white",
        color: isOn ? "white" : "black",
      }} // Missing closing brace was added here
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
