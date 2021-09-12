import React from "react";
import styled from "styled-components";

interface ISimpleButton {
  title: string,
  color: string,
  primary: boolean,
  onClick: Function,
}

const SimpleButton = ({title, color, primary, onClick}: ISimpleButton) => {

  const Wrapper = styled.button`
    background: ${primary ? "palevioletred" : "white"};
    color: ${primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `

  return (
    <Wrapper onClick={onClick}>
      {title} 
    </Wrapper>
  )
};

export { SimpleButton };
