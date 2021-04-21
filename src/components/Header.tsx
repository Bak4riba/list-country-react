import React from 'react'
import styled from 'styled-components';
const HeaderDivContainer = styled.header`
  display:flex;
  width:100%;
  background-color:var(--Primary);
  justify-content:center;
  align-items:center;
  height:70px;

`
const Title = styled.h1`
  color:white;
  font-weight:700;
  font-size:1.8rem;
  margin:400px;
`
export default function Header(){
  return(
    <HeaderDivContainer>
      <Title>Country List</Title>
    </HeaderDivContainer>
  )
}