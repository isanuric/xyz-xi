import React from "react";
import { DiJava } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { FaCss3Alt, FaReact } from "react-icons/fa";

export default function Service() {
  return (
    <div id="service" className="container cont-services">
      <h2>Services</h2>
      <div className="services">
        <div className="service">
          <DiJava size="5rem" />
          <h1>Java</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            aperiam.
          </h5>
        </div>
        <div className="service">
          <SiSpringboot size="5rem" />
          <h1>Spring Boot</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            aperiam.
          </h5>
        </div>
        <div className="service">
          <FaCss3Alt size="5rem" />
          <h1>CSS</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            aperiam.
          </h5>
        </div>
        <div className="service">
          <FaReact size="5rem" />
          <h1>React</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            aperiam.
          </h5>
        </div>
      </div>
    </div>
  );
}
