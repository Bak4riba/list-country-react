/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect} from 'react'

const getData = (setCountries:any) =>{
  const consumirAPI = async (graphqlEndpoint:RequestInfo, query:String, variables = {}) => {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });
   return response.json();
  }

/*   const GRAPHQL_ENDPOINT = 'http://countries-274616.ew.r.appspot.com/'
  const PaisesQuery = `
  query Paises{
      Country {
        name: name
        population:population
        capital: name
        area: area
      }
    }
  `; */
  const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/'
  const PaisesQuery = `
  query countries{
      countries{
        name:name
      }
    }
  `;

  consumirAPI(GRAPHQL_ENDPOINT, PaisesQuery).then((response)=> {setCountries(response)});
  
}

export function useCountries(){
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getData(setCountries);
    
  }, [])
  return countries;
}