import React, { Fragment } from "react";

export default function Navbar() {
  return (
    <div className="main-nav">
      <div className="logo">
        <h2>xyz-xi</h2>
      </div>

      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#service">service</a>
        </li>
        <li>
          <a href="#picture">picture</a>
        </li>
        <li>
          <a href="#quote">Quote</a>
        </li>
      </ul>
    </div>
   );
}
