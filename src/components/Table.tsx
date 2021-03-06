/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useState, useEffect} from 'react';
import styled from 'styled-components';
import { JsonObjectExpressionStatement } from 'typescript';

const TableCountry = styled.table`
background-color:red;
margin:0 auto;
text-align:justify;
margin-top:15px;
font-weight:500;
`

const Thead = styled.thead`
  background-color:#424874;
  color:white;
  border: 1px solid black;
  font-weight:700;
  
`
const Theading = styled.th`
  padding:15px;
`
const TdBody = styled.td`
  color:#494949;
  background:#A6B1E1;
  border: 1px solid;
  padding:3px;
`

export default function ListCountries() {  
const [countries, setCountries] = useState<any>([])
useEffect(function effectFunction(){
  const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/'
  
const QueryCountries = `
query Countries{
  countries{
    code:code,
    name:name,
    capital:capital,
    emoji:emoji,
    languages{
      name:name
    }
    currency:currency,
  }
}
`;
  async function consumirAPI(graphqlEndpoint:RequestInfo, query:any, ){
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query} )
    });
    const json = await response.json();
    setCountries(json.data.countries);
    return json
  }
  consumirAPI(GRAPHQL_ENDPOINT, QueryCountries);
},[])
//Setando Columns
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100,flex:1 },
  { field: 'name', headerName: 'Country', width: 100,flex:1 },
  { field: 'capital', headerName: 'Capital', width: 100,flex:1 },
  { field: 'emoji', headerName: 'Flag', width: 100, flex:1 },
  { field: 'languages', headerName: 'Languages', width: 100,flex:1 },
  { field: 'currency', headerName: 'Currency', width: 100, flex:1 },
];
var i = 0
//Setando languages
const languages = countries.map((item:any)=>{return {name:item.languages.map((index :any)=>{return index.name})}})
//Setando Rows
const rows:Array<any> = countries.map((c:any)=>{return {id:i,name:c.name,capital:c.capital,emoji:c.emoji, languages:languages[i++].name,currency:c.currency}});
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={50} disableSelectionOnClick={true} checkboxSelection={false} />
    </div>
  );
}

