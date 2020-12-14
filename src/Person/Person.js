import React from "react";

import styled from "styled-components";

//import "./Person.css";

const StyledDiv = styled.div`
border: 1px solid #ccc;
width: 60%;
margin: 0 auto 15px;
box-shadow: 0 2px 3px #eae;
padding: 16px;
text-align: center;
}

@media (min-width: 500px) {
width: 450px;
color: rgba(120, 0, 0, 0.8);
}
`;

const Person = (props) => {
  return (
    //<p>I'm a person and my age is {Math.floor(Math.random() * 30)} years</p>
    //<div className="person-card" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm a {props.name} and my age is {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </StyledDiv>
  );
};

export default Person;
