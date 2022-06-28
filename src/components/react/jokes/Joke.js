import React, { useState } from "react";

export default function Joke() {
  const [isShown, setIsShown] = useState(false);
  function toggle() {
    setIsShown((prev) => !prev);
  }
  return (
    <div className="container joke squares">
      <div className="title">React V</div>
      <div className="subtitle"></div>
      {isShown && <p>Schöne neue Welt</p>}
      <button className="button" onClick={toggle}>
        {isShown ? "Hide" : "Show"}
      </button>
    </div>
  );
}
