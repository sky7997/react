import React, { useState } from "react";

const FormHandling = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Without preventDefault(), the form would refresh the page when submitted.

    setSubmittedValue(inputValue);
    setInputValue(""); // Clear input field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};

export default FormHandling;
