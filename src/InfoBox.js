import React from 'react'
import './InfoBox.css'

import {
    Card,
    CardContent,
    Typography
  } from '@material-ui/core'

function InfoBox({ title, cases, total, ...props }) {
    return (
        <Card onClick={ props.onClick } className={ `info-box ${props.active && 'infoBox__selected' }` }>

            <CardContent>
                <Typography color="textSecondary">
                    { title }
                </Typography>

                <h2 className={ `infoBox__stats ${props.className}` }>{ cases }</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    { total }
                </Typography>

            </CardContent>
            
        </Card>
    )
}

export default InfoBox
