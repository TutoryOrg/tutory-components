import React from "react";
import styled from "styled-components";

interface IHeaderTitle {
  title: string,
}

const HeaderTitle = () => {

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `

  return(
    <Wrapper>
      <Title> 
        <span>this is the component</span> 
      </Title> 
    </Wrapper>
  )
};

export { HeaderTitle };
