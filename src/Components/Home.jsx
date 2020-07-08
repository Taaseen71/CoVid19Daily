import React, { useState, useEffect } from 'react';
import '../App.css';
import data from './data.json';
import { Bar } from "react-chartjs-2";

function Home(props) {
    useEffect(() => {

        createBarGraph1(props);
        createBarGraph2(props);
    }, []);

    //* Graphs Start here

    const [newGraph1, setNewGraph1] = useState([])
    const [totalGraph1, setTotalGraph1] = useState([])

    //* This Creates Bar Graph of Newly Infected People Daily
    const createBarGraph1 = (props) => {
        const myChart = {
            chartData: {
                labels: ['New Cases', 'New Recovered', 'New Deaths'],
                datasets: [
                    {
                        label: 'Bar Graph',
                        data: [
                            props.globalData.NewConfirmed,
                            props.globalData.NewRecovered,
                            props.globalData.NewDeaths
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'

                        ],

                    }
                ]
            }
        };

        return setNewGraph1(myChart)
    }

    //* This Creates Bar Graph of Newly Infected People Daily
    const createBarGraph2 = (props) => {
        const myChart = {
            chartData: {
                labels: ['Total Cases', 'Total Recovered', 'Total Deaths'],
                datasets: [
                    {
                        label: 'Bar Graph',
                        data: [
                            props.globalData.TotalConfirmed,
                            props.globalData.TotalRecovered,
                            props.globalData.TotalDeaths
                        ],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],

                    }
                ]
            }
        };

        return setTotalGraph1(myChart)
    }

    return (
        <>
            <div className='Home'>
                <h2>Global Data</h2>
                {/* <img src="https://media0.giphy.com/media/J0QVUUvPeLS5G/giphy.gif?cid=ecf05e47bd464062255a9f0c0c2e6b72b3eb9efbdbea3e66&rid=giphy.gif" alt="" width="300px" /> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Rotating_globe.gif" alt="" width="100px" />
                <h2>{`Today's Date: ${props.todaysDate}`}</h2>
                <h4>{`New Cases Confirmed Today: ${props.globalData.NewConfirmed}`}</h4>
                <h4>{`New Deaths: ${props.globalData.NewDeaths}`}</h4>
                <h4>{`New Recovered: ${props.globalData.NewRecovered}`}</h4>
                <h4>{`Total Confirmed Cases: ${props.globalData.TotalConfirmed}`}</h4>
                <h4>{`Total Recovered Cases: ${props.globalData.TotalRecovered}`}</h4>
                <h4>{`Total Deaths: ${props.globalData.TotalDeaths}`}</h4>
            </div>

            <div className="chartsWrapper">

         
            <div className= "charts">

            <div className="chart1">
                <Bar className="graph"
                    data={newGraph1.chartData}
                
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        responsive: true,
                        maintainAspectRatio: true
                    }}
                />
            </div>
            <div className="chart2">
                <Bar className="graph"
                    data={totalGraph1.chartData}
               
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        responsive: true,
                        maintainAspectRatio: true
                    }}
                />
            </div>
                            
            </div>
            </div>
        </>
    );
}

export default Home;

