import React from "react";

const ListRendering = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListRendering;
