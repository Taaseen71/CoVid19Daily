import React, { useState, useEffect } from 'react';
import data from './data.json';
import '../App.css';
import { useParams } from "react-router-dom"

function CountryDetail(props) {
    const { id } = useParams();
    console.log("id = ", id)


    const detail = props.countryDetail.find(countryDetail => countryDetail.CountryCode === id)
    console.log(detail)

    if (!detail) return (<h1>Loading...</h1>);	//*Guard Operator works with && 

    const fixDate = (date) => {
        let full;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let time = date.slice(12, 19);
        full = ` ${month}/${day}/${year}, Time Updated: ${time}`;
        return full;
    };

    return (
        <>
            <div className="singleCountryDetail">
                <h2>{fixDate(detail.Date)}</h2>
                {/* <h2>{id}</h2> */} {/* Shows Params CountryCode */}
                <img src={`https://www.countryflags.io/${id}/flat/64.png`}></img>
                <h2>{detail.Country}</h2>
                <h4>{`New Confirmed: ${detail.NewConfirmed}`}</h4>
                <h4>{`New Deaths: ${detail.NewDeaths}`}</h4>
                <h4>{`New Recovered: ${detail.NewRecovered}`}</h4>
                <h4>{`Total Confirmed: ${detail.TotalConfirmed}`}</h4>
                <h4>{`Total Recovered: ${detail.TotalRecovered}`}</h4>
                <h4>{`Total Deaths: ${detail.TotalDeaths}`}</h4>
            </div>
        </>
    );
}

export default CountryDetail;

