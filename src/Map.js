import React from 'react';
import { MapContainer, TileLayer, useMap, Circle, Popup } from 'react-leaflet';
import './Map.css';
import MapCircle from './MapCircle';

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}


function Map({ mapCountries, caseType, center, zoom }) {
    console.log(mapCountries[20]);
    return (
        <div className="map">
          <MapContainer center={ center } zoom={ zoom }>
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <ChangeMapView coords={ center } />
              
              {
                mapCountries.map((country, idx) => (<MapCircle key={ idx } country={ country } caseType={ caseType } />))
              }
          </MapContainer>
        </div>
    )
}

export default Map
