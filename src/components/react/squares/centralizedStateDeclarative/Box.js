import React, { useState } from "react";
import "../Squares.css";

export default function Box(props) {
  // A javascript object {}
  const style = {
    backgroundColor: props.on ? "white" : "black",
  };

  return (
    /* Version 1 */
    // <div className="box" style={style} onClick={() => props.toggle(props.id)}>
    <div className="box" style={style} onClick={props.toggle}>
    </div>
  );
}
