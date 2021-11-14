import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './Map.css';

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}


function Map({ center, zoom }) {
    console.log(center, zoom);

    return (
        <div className="map">
          <MapContainer center={ center } zoom={ zoom }>
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <ChangeMapView coords={ center } />
          </MapContainer>
        </div>
    )
}

export default Map
