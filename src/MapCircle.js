import React from 'react'
import { Circle, Popup } from 'react-leaflet'

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
                    I am a popup
                </Popup>
    
            </Circle>
        
    )
}

export default MapCircle
