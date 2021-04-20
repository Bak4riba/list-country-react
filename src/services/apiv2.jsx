import React, { useState, useEffect } from 'react'

const loadingData = async setCountries => {
  const API_URL = 'https://countries.trevorblades.com/';
  const CountriesQuery = `
  query countries{
      countries{
        name:name
      }
    }
  `;

  const axios = require('axios');
  const data = await axios.post(API_URL, {
    query: CountriesQuery,
    variable:{},
  },{
    'Content-Type': 'application/json'
}).then((response)=>{console.log(response)})
  
}