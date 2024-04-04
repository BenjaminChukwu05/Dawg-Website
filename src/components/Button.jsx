import React from 'react'
import styled from 'styled-components'

export default function Button({ text, blue = false }) {
  return (
    <Div>
      <StyledButton blue={blue}>{text}</StyledButton>
    </Div>
  );
}

const Div = styled.div`
`;

const StyledButton = styled.button`
  border-radius: 4rem;
  padding: 0.8rem 2rem;
  border: ${({ blue }) => blue ? 'none' : '1px solid white'};
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: ${({ blue }) => blue ? '#2d69fd' : 'transparent'};
`;
