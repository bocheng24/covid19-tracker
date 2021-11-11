import React from 'react'
import './Table.css'

function Table(props) {
    return (
        <div className="table">
          <h3>Live Cases by Countries</h3>
          {
            props.liveCases.map(
                (liveCase, idx) => (
                    <div className="tb-row" key={idx}>
                        <div>{ liveCase.country }</div>
                        <div>{ liveCase.cases }</div>
                    </div>
                )
            )
          }
        </div>
    );
}

export default Table
