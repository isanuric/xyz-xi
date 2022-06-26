import React, { useState } from "react";
import "../Squares.css";

export default function Box(props) {
  const [on, setOn] = useState(props.on);

  function switchOnOff() {
    setOn((prev) => !prev);
  }

  // A javascript object {}
  const style = {
    backgroundColor: on ? "white" : "black",
  };

  return <div className="box" onClick={switchOnOff} style={style}></div>;
}
