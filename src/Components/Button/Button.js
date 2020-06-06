import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.button`
  height: 50px;
  background-color: blue;
  font-size: 22px;
  font-weight: 600;
  border: 0;
  color: white;
  width: 100%;
`;

function Button({ children, className }) {

  return (

  <Wrapper className={className}>
    {children}
  </Wrapper>
  )
}

export default Button;