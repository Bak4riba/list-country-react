import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import DataTable from './components/Table';

const DivContainer = styled.div`
  background-color:#CACFD6;

`
function App() {
  return (
    <>
    <Header/>
    <DivContainer>
      <DataTable/>
    </DivContainer>
  </>
  );
}

export default App;
