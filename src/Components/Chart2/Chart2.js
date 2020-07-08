// https://github.com/jerairrest/react-chartjs-2
// https://stackoverflow.com/questions/44346562/chart-js-data-to-start-at-zero#comment75695940_44346562


import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";



function Chart2() {
    useEffect((props) => {
        setState();
    }, []);

    const [myState, setMyState] = useState([]);

    const setState = () => {
        const myChart = {
            chartData: {
                labels: ['Bar1', 'Bar2', 'Bar3'],
                datasets: [
                    {
                        label: 'Bar Graph',
                        data: [
                            10000,
                            5000,
                            2000

                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],

                    }
                ]
            }
        };

        return setMyState(myChart)
    }

    return (
        <div className="chart">
            <Bar
                data={myState.chartData}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    maintainAspectRatio: true
                }}
            />
            <Bar
                data={myState.chartData}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    maintainAspectRatio: true
                }}
            />
        </div>
    );
}



export default Chart2;

