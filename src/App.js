import React, {useState, useEffect} from 'react'

import {
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

import './App.css';

function App() {
  
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    // The code here will run only once
    // when the componect is loaded
    const getCountriesData = async () => {

      await fetch('https://disease.sh/v3/covid-19/countries')
             .then(response => response.json())
             .then(data => {
               const countries = data.map(
                 country => ({
                    name: country.country,
                    code: country.countryInfo.iso3
                 })
               )
               setCountries(countries);
             });
    };

    getCountriesData();

  }, [])

  return (
    <div className="app">

      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select variant="outlined" value={ country }>

            <MenuItem value="worldwide">World Wide</MenuItem>

            {
              countries.map(
                (country, idx) => <MenuItem key={ idx } value={ country.code }>{ country.name }</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </div>

    </div>
  );
}

export default App;
