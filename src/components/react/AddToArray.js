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
      setElements(() => []);
      // return "Reached maximum number of allowed elements.";
    }
    // elements.length < 10
    //   ? elements.map((element) => <p key={element}>{element}, </p>)
    //   : "Reached maximum number of allowed elements.";
  }

  return (
    <div className="container add-to-array">
      <div className="title">React I</div>
      <h1>useState</h1>
      <div className="container-inner">
        <button className="button" onClick={addToArray}>
          {elements.length < 10 ? "Add new Element" : "No more elements are allowed"}
        </button>
        <div className="display">{displayResult()} </div>
      </div>
      <p>{data}</p>
    </div>
  );
}

const data = `function displayResult() {
  if (elements.length <= 10) {
    return elements.map((element) =>
      <p
       key={element}>{element},
      </p>);
  } else {
    setElements(() => []);
  }
}`;
