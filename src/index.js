import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let city = {
  name: "Minneapolis",
  country: "Minnesota",
};

function Hello({ intro, message }) {
  return (
    <div>
      <h1>{intro}</h1>
      <p>{message}</p>
    </div>
  );
}

ReactDOM.render(
  <Hello intro="Welcome to React" message="Let's learn some stuff" />,
  document.getElementById("root")
);
