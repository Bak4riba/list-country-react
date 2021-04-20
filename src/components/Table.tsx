/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect} from 'react';
import styled from 'styled-components';

const TableCountry = styled.table`
background-color:red;
margin:0 auto;
text-align:center;
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



  return (

<TableCountry>
  <Thead>
  <tr>
    <Theading >Code</Theading>
    <Theading >Country</Theading>
    <Theading >Capital</Theading>
    <Theading >Currency</Theading>
  </tr>
</Thead>
<tbody>
  {countries.map((country:any)=>
  {return <tr><TdBody>{country.code}</TdBody><TdBody>{country.name}</TdBody><TdBody>{country.capital}</TdBody><TdBody>{country.currency}</TdBody></tr>})}

</tbody>
</TableCountry>
  );
}

