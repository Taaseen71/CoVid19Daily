import React, { useState, useEffect } from 'react';
import data from './data.json';
import '../App.css';
import { useParams, Redirect } from "react-router-dom";
import { Bar } from "react-chartjs-2";


function CountryDetail(props) {

    //* setting ID by default to params. wont be called elsewhere
    const [id, setId] = useState(useParams());


    const [newGraph, setNewGraph] = useState([]);
    const [totalGraph, setTotalGraph] = useState([])
    const [myDetail, setDetail] = useState([])


    useEffect(() => {
        // setDetail(myDetail)

        setDetail(props.countryDetail.find(countryDetail => countryDetail.CountryCode === id.id))

    }, [props])



    useEffect(() => {
        //* if myDetail.Country isTrue or has a value, then, create the Bar Graphs
        if (myDetail.Country) {
            createBarGraph1(myDetail);
            createBarGraph2(myDetail);
        }
    }, [myDetail])

    //! PROTECT WORKING CODE STARTING HERE



    if (!props.countryDetail.length) return (<Redirect to="/" />);	//*Guard Operator works with && 

    const fixDate = (date) => {
        let full;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let time = date.slice(12, 19);
        full = ` ${month}/${day}/${year}, Time Updated: ${time}`;
        return full;
    };
    //! ENDING HERE

    const createBarGraph1 = (myDetail) => {
        const myChart = {
            chartData: {
                labels: ['New Cases', 'New Recovered', 'New Deaths'],
                datasets: [
                    {
                        label: 'Bar Graph',
                        data: [
                            myDetail.NewConfirmed,
                            myDetail.NewRecovered,
                            myDetail.NewDeaths
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

        return setNewGraph(myChart)
    }

    const createBarGraph2 = (myDetail) => {
        const myChart = {
            chartData: {
                labels: ['Total Cases', 'Total Recovered', 'Total Deaths'],
                datasets: [
                    {
                        label: 'Bar Graph',
                        data: [
                            myDetail.TotalConfirmed,
                            myDetail.TotalRecovered,
                            myDetail.TotalDeaths
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

        return setTotalGraph(myChart)
    }





    return (
        <>
            <div className="singleCountryDetail">
                {myDetail.Date && <h2>{fixDate(myDetail.Date)}</h2>}
                {/* guard Operator in Action again */}
                <img src={`https://www.countryflags.io/${id.id}/flat/64.png`}></img>
                <h2>{myDetail.Country}</h2>
                <h4>{`New Confirmed: ${myDetail.NewConfirmed}`}</h4>
                <h4>{`New Deaths: ${myDetail.NewDeaths}`}</h4>
                <h4>{`New Recovered: ${myDetail.NewRecovered}`}</h4>
                <h4>{`Total Confirmed: ${myDetail.TotalConfirmed}`}</h4>
                <h4>{`Total Recovered: ${myDetail.TotalRecovered}`}</h4>
                <h4>{`Total Deaths: ${myDetail.TotalDeaths}`}</h4>
            </div>
            <div className="chart1">
                <Bar
                    data={newGraph.chartData}
                    height="50px"
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
            <div className="chart2">
                <Bar
                    data={totalGraph.chartData}
                    height="50px"
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
        </>
    );
}

export default CountryDetail;

