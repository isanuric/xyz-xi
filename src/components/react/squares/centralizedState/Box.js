import React, { useState } from "react";
import "../Squares.css";

export default function Box(props) {
  // A javascript object {}
  const style = {
    backgroundColor: props.on ? "white" : "black",
  };

  return (
    <div className="box" style={style} onClick={() => props.toggle(props.id)}>
      {/* console.log(props.on) */}
    </div>
  );
}
