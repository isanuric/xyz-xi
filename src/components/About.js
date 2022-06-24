import React from "react";
const image = "../assets/images/about.jpg";

export default function About() {
  return (
    <div id="about" className="container about">
      <div className="text">
        <h1>About</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem optio
          neque at obcaecati nemo necessitatibus esse suscipit odit fuga quaerat
          fugiat quisquam, non iste officia illo sequi ducimus, doloremque quasi
          hic ipsa! Adipisci expedita ducimus quibusdam eos sint optio omnis?
          Exercitationem est nisi praesentium delectus natus ullam voluptate
          quas nobis.
        </h5>
      </div>
      <div className="image">
        <img
          src={require("../assets/images/about.jpg")}
          className="card-image"
        />
      </div>
    </div>
  );
}
