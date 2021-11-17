import React from 'react'
import './Table.css'
import numeral from 'numeral';

function Table(props) {
    return (
        <div className="table">
          
          <div className="table-block">
            {
                props.liveCases.map(
                    (liveCase, idx) => (
                        <div className="tb-row" key={idx}>
                            <div>{ liveCase.country }</div>
                            <div>{ numeral(liveCase.cases).format("0,0") }</div>
                        </div>
                    )
                )
            }
          </div>
        </div>
    );
}

export default Table
