import React from "react";
import styled from "styled-components";
import { fontSz, blockSz } from "../utils.ts";

interface IInput {
  text: string,
  textHolder?: string,
  size?: string,
  textColor?: string,
  backgroundColor?: string,
  borderColor?: string,
  textType?: string,
}

const Input = ({
  text,
  textHolder = "Write here ...",
  textHolderColor,
  size = "s",
  textColor,
  backgroundColor,
  borderColor,
  textType = "text"
}: IInput) => {

  const Wrapper = styled.input`
    background: ${backgroundColor ? backgroundColor : ({ theme }) => theme.buttonBg};
    color: ${textColor ? textColor : ({ theme }) => theme.buttonTx};
    
    height: 2rem;
    width: ${blockSz(size)};
    font-size: ${fontSz(size)};
    font-weight: bold;
    border: 2.5px solid ${borderColor ? borderColor : ({ theme }) => theme.buttonTx};
    border-radius: 6px;
    ::placeholder{
      color: ${textColor ? textColor : ({ theme }) => theme.buttonTx};
    }
  `  

  return(
    <Wrapper type={textType} placeholder={textHolder} />
  )
}

export { Input };
