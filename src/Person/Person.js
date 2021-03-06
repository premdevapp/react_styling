import React from "react";
import "./Person.css";
import Radium from "radium";

const Person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
      color: "rgba(120, 0, 0, 0.8)",
    },
  };
  return (
    //<p>I'm a person and my age is {Math.floor(Math.random() * 30)} years</p>
    <div className="person-card" style={style}>
      <p onClick={props.click}>
        I'm a {props.name} and my age is {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default Radium(Person);
