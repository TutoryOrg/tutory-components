import React from "react";
import styled from "styled-components";
import { fontSz, blockSz } from "../utils.ts";

interface IButton {
  text: string,
  size?: string,
  textColor?: string,
  backgroundColor?: string,
  borderColor?: string,
  onClick?: Function,
}

const Button = ({
  text, 
  size = "s", 
  textColor, 
  backgroundColor,
  borderColor = textColor,
  onClick 
}: IButton) => {

  const Wrapper = styled.button`
    background: ${backgroundColor ? backgroundColor : ({ theme }) => theme.buttonBg};
    color: ${textColor ? textColor : ({ theme }) => theme.buttonTx};
    
    height: 2.5rem;
    width: ${blockSz(size)};
    font-size: ${fontSz(size)};
    font-weight: bold;
    border: 2.5px solid ${borderColor ? borderColor  : ({ theme }) => theme.buttonTx};
    border-radius: 6px;
  `

  return(
    <Wrapper onClick={onClick}>
      {text}
    </Wrapper>
  )
}

export { Button };
