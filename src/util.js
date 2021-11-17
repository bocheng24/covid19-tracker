import React from "react"
import numeral from "numeral";

export const sortData = data => {
    let sortedData = [...data];

    sortedData.sort((first, second) => {
        if (first.cases > second.cases) {
            return -1;
        } else {
            return 1;
        }
    })

    return sortedData;
}

export const printPrettyStats = data => {
    return data ? `+${ numeral(data).format("0.0a") }` : '0';
}