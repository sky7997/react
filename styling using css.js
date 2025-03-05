styles.css

.container {
  background-color: lightgray;
  padding: 20px;
  border-radius: 10px;
}

.paragraph {
  color: blue;
  font-size: 18px;
}

import React from "react";
import "./styles.css"; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <p className="paragraph">This is the first paragraph.</p>
      <p className="paragraph">This is the second paragraph.</p>
    </div>
  );
};

export default App;
