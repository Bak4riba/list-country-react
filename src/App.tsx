import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import DataTable from './components/Table';


const DivContainer = styled.div`
 background-color:white;
 width:80%;
 margin:0 auto;
 box-shadow: 3px 3px 18px 5px rgba(36,36,36,0.84);
 @media(max-width:300px){
   background-color:black
   width:100%
 }
`


function App() {
  return (
    <>
    <DivContainer>
    <Header/>
      <DataTable/>
    </DivContainer>
    </>
  );
}

export default App;
