import React, { Fragment, useState } from "react";

export default function AddToArray() {
  const [elements, setElements] = useState(["Element 1"]);

  function addToArray() {
    setElements(() => {
      return [...elements, `Element ${elements.length + 1}`];
    });
  }

  function displayResult() {
    if (elements.length <= 10) {
        return elements.map((element) => <p key={element}>{element}, </p>);
    } else {
        setElements(() =>  []);
        return "Reached maximum number of allowed elements.";

    }
    // elements.length < 10
    //   ? elements.map((element) => <p key={element}>{element}, </p>)
    //   : "Reached maximum number of allowed elements.";

  }

  return (
    <div className="container add-to-array">
        <div className="title">React I</div>
      <h1 className="anim01">useState</h1>
      <button className="button" onClick={addToArray}>
        Add new Element
      </button>
      <div className="display">{displayResult()} </div>
    </div>
  );
}
