import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  { id: "1", name: "Lake of Isles", traildhead: "Easy" },
  { id: "2", name: "Bde Maka Ska", traildhead: "Mod" },
  { id: "3", name: "Harriet", traildhead: "Hard" },
];

const list = [1, 2, 3, 4, 5];

function App({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <div>
          <li key={i}>{item} – Item in the list</li>
          <li>ID of the item {i}</li>
        </div>
      ))}
    </ul>
  );
}

ReactDOM.render(<App items={list} />, document.getElementById("root"));
