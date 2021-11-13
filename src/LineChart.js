import React, {useState, useEffect} from 'react'
import { Line } from "react-chartjs-2"
import numeral from 'numeral';

const options = {
    
    legend: {
        display: false
    },

    elements: {
        point: {
            radius: 0,
        }
    },

    maintainAspectRatio: false,

    // tooltips: {
    //     mode: "index",
    //     intersect: false,
    //     callbacks: {
    //         label: function(tooltipItem, data) {
    //             return numeral(tooltipItem.value).format("+0,0");
    //         }
    //     }
    // },

    // scales: {
    //     xAxes: [
    //         {
    //             type: "time",
    //             time: {
    //                 format: "MM/DD/YY",
    //                 tooltipFormat: "ll",
    //             }
    //         }
    //     ],

    //     yAxes: [
    //         {
    //             gridLines: {
    //                 display: false,
    //             },

    //             ticks: {
    //                 callback: function(value, index, values) {
    //                     return numeral(value).format("0a");
    //                 },
    //             },
    //         }
    //     ],
    // }
}

const buildLineData = (data, caseType = 'cases') => {

    let chartData = [];
    let prevData;

    for (const date in data[caseType]) {

        if (prevData) {
            const newChartData = {
                x: date,
                y: data[caseType][date] - prevData
            }

            chartData.push(newChartData);

        }

        prevData = data[caseType][date];
    }

    return chartData;
}

function LineChart() {
    const [histData, setHistData] = useState({});

    useEffect(() => {
        const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=120';
        
        fetch(url)
         .then(response => response.json())
         .then(data => {
             const chartData = buildLineData(data);
             setHistData(chartData);
         });
    }, []);

    // console.log(histData);

    return (
        <div>
          {histData?.length > 0 && (
            <Line 
                options={ options }
                data={ {
                    
                    datasets: [{
                        label: "New cases",
                        backgroundColor: "rgba(204, 16, 52, 0.5)",
                        borderColor: "#CC1034",
                        data: histData 
                    }]
                }}      
            />
            )
          }
        </div>
    )
}

export default LineChart

