import React, {useState} from 'react'

import {
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core'

import './App.css';

function App() {
  
  const [countries, setCountry] = useState(['USA', 'UK', 'INDIA']);

  console.log(countries);

  return (
    <div className="app">

      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select variant="outlined" value="">
            {
              countries.map(
                country => <MenuItem value={country}>{ country }</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </div>

    </div>
  );
}

export default App;
