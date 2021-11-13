import React from 'react'
import './Table.css'

function Table(props) {
    return (
        <div className="table">
          
          <div className="table-block">
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
        </div>
    );
}

export default Table
