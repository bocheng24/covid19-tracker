import React from 'react'
import { Circle, Popup } from 'react-leaflet'
import numeral from 'numeral'

const caseTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 200
    },

    recovered: {
        hex: "#7DD71D",
        multiplier: 300
    },

    deaths: {
        hex: "#8c7ae6",
        multiplier: 800
    }
}

function MapCircle({ country, caseType }) {
    return (
        
            <Circle
                center={ [country.countryInfo.lat, country.countryInfo.long] }
                fillOpacity={ 0.4 }
                color={ caseTypeColors[caseType].hex }
                fillcolor={ caseTypeColors[caseType].hex }
                radius={ Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier }
            >
                <Popup>
                    <div>
                        <div>{ country.country }</div>
                        <div>{ `Cases: ${numeral(country.cases).format('0,0')}` }</div>
                        <div>{ `Recovered: ${numeral(country.recovered).format('0,0')}` }</div>
                        <div>{ `Deaths: ${numeral(country.deaths).format('0,0')}` }</div>
                        
                    </div>
                </Popup>
    
            </Circle>
        
    )
}

export default MapCircle
