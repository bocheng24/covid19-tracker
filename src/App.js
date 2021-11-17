import React, {useState, useEffect} from 'react'

import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
} from '@material-ui/core'

import './App.css';

import InfoBox from './InfoBox';
import Table from './Table'
import { sortData, printPrettyStats } from './util'
import LineChart from './LineChart'
import Map from './Map'
import 'leaflet/dist/leaflet.css'

function App() {
  
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState([]);
  const [liveCases, setLiveCases] = useState([]);
  const [mapCenter, setMapCenter] = useState({lat: 34, lng: -40});
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState('cases');

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
               
               const sortedData = sortData(data);
               setLiveCases(sortedData);
               setCountries(countries);
               setMapCountries(data);

             });
    };

    getCountriesData();

  }, [])

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => setCountryInfo(data));
  }, [])

  const onCountryChange = async (e) => {
    const country_code = e.target.value;
    
    const url = country_code === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${country_code}`;
    
    await fetch(url)
    .then(response => response.json())
    .then(data => {

            setCountry(country_code);
            setCountryInfo(data);
            country_code !== 'worldwide' && setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
            setMapZoom(4);

          });

  }

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>

          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={ onCountryChange } value={ country }>

              <MenuItem value="worldwide">World Wide</MenuItem>

              {
                countries.map(
                  (country, idx) => <MenuItem key={ idx } value={ country.code }>{ country.name }</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">

          <InfoBox title="Coronavirus Cases" 
                   cases={ printPrettyStats(countryInfo.todayCases) } 
                   total={ `${printPrettyStats(countryInfo.active)} Total` } 
                   onClick={ e => setCaseType('cases') }
                   className={ 'infoBox_cases' }
                   active={ caseType === 'cases' }
          />

          <InfoBox title="Recovered" 
                   cases={ printPrettyStats(countryInfo.todayRecovered) } 
                   total={ `${printPrettyStats(countryInfo.recovered)} Total` } 
                   onClick={ e => setCaseType('recovered') }
                   className={ 'infoBox_recovered' }
                   active={ caseType === 'recovered' }
          />

          <InfoBox title="Deaths" 
                   cases={ printPrettyStats(countryInfo.todayDeaths) } 
                   total={ `${printPrettyStats(countryInfo.deaths)} Total` } 
                   onClick={ e => setCaseType('deaths') }
                   className={ 'infoBox_deaths' }
                   active={ caseType === 'deaths' }
          />

        </div>

        <Map mapCountries={ mapCountries } caseType={ caseType } center={ mapCenter } zoom={ mapZoom } />
        
      </div>

      <Card className="app__right">
        <CardContent className="right__card">
          <h3>Live Cases by Countries</h3>
          <Table liveCases={ liveCases } />

          <h3>World Wide New Cases</h3>
          <LineChart />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
