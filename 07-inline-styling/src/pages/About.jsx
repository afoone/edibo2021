import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [fontSize, setFontSize] = useState(8);

  return (
    <div>
      Tamaño de la fuente:{" "}
      <input
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        type="number"
      ></input>
      <div
        style={{
          color: "blue",
          fontSize: parseInt(fontSize),
        }}
      >
        Esta es mi about page
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default About;
