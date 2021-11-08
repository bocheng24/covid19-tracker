import React from 'react'

import {
  MenuItem,
  TextField,
  FormControl,
  Select
} from '@material-ui/core'

import './App.css';

function App() {
  
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>

      <FormControl>
        <Select variant="outlined" value="ABC">
          <MenuItem value="ww">World Wide</MenuItem>
          <MenuItem value="cn">China</MenuItem>
          <MenuItem value="usa">USA</MenuItem>
        </Select>
      </FormControl>
        
        
    </div>
  );
}

export default App;
