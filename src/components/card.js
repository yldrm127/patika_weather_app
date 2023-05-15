import React from "react";
import { icons } from "./icons";
function card({ item }) {
  return (
    <div className="card">
      {icons(item[2])}
      <p>{item[0]}</p>
      <p>{item[1]}</p>
      <p>{item[2]}</p>
      <p>{item[3]}</p>
      <p>{item[4]}</p>
    </div>
  );
}

export default card;
