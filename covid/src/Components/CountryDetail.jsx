import React, { useState, useEffect } from 'react';
import data from './data.json';
import '../App.css';
import { useParams, Redirect } from "react-router-dom";
import { Bar } from "react-chartjs-2";


function CountryDetail(props) {
    console.log(props)

    const [id, setId] = useState(useParams());
    console.log(id.id)

    const [newGraph, setNewGraph] = useState([]);
    const [totalGraph, setTotalGraph] = useState([])
    const [myDetail, setDetail] = useState([])


    useEffect(() => {
        // setDetail(myDetail)

        setDetail(props.countryDetail.find(countryDetail => countryDetail.CountryCode === id.id))

    }, [props])

    console.log(myDetail)

    useEffect(() => {
        console.log(myDetail)
        if (myDetail.Country) {
            console.log('here')
            createBarGraph1(myDetail);
            createBarGraph2(myDetail);
        }
    }, [myDetail])

    //! PROTECT WORKING CODE STARTING HERE

    console.log("id = ", id)




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
                            myDetail.NewConfirmed,
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
        console.log(myChart)
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
                            myDetail.TotalConfirmed,
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



    //TODO: WHERE TO CALL FUNCTION createaBarGraph1(myDetail)??
    console.log(myDetail.Date)

    return (
        <>
            <div className="singleCountryDetail">
                {myDetail.Date && <h2>{fixDate(myDetail.Date)}</h2>}
                {/* <h2>{id}</h2> */} {/* Shows Params CountryCode */}
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

