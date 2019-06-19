import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      // style={{ height: 140, clear: "both", paddingTop: 30, textAlign: "center", border: "1px solid black", marginBottom: "20px"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
