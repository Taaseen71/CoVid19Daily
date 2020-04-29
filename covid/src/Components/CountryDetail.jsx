import React, { useState, useEffect } from 'react';
import data from './data.json';
import '../App.css';
import { useParams } from "react-router-dom"

function CountryDetail(props) {
    const { id } = useParams();
    console.log("id = ", id)


    const detail = props.countryDetail.find(countryDetail => countryDetail.CountryCode === id)
    console.log(detail)

    if (!detail) return (<h1>Loaded</h1>);	//*Guard Operator works with && 

    const fixDate = (date) => {
        let full;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let time = date.slice(12, 19);
        full = ` ${month}/${day}/${year}, Time Updated:${time}`;
        return full;
    };

    return (
        <div className="singleCountryDetail">
            <h1>{fixDate(detail.Date)}</h1>
            <h1>{id}</h1>
            <img src={`https://www.countryflags.io/${id}/flat/64.png`}></img>
            <h1>{detail.Country}</h1>
            <h4>{`New Confirmed: ${detail.NewConfirmed}`}</h4>
            <h4>{`New Deaths: ${detail.NewDeaths}`}</h4>
            <h4>{`New Recovered: ${detail.NewRecovered}`}</h4>
            <h4>{`Total Confirmed: ${detail.TotalConfirmed}`}</h4>
            <h4>{`Total Recovered: ${detail.TotalRecovered}`}</h4>
            <h4>{`Total Deaths: ${detail.TotalDeaths}`}</h4>
        </div>
    );
}

export default CountryDetail;

// {country.forEach((element) => {
// 	// console.log(element.Country);
// 	loopCountry(element);
// 	switch (element.CountryCode) {
// 		case match.params.id:
// 			console.log(element);
// 			break;
// 	}
// })}

// {country.forEach((element) => {
// 	// console.log(element.Country);
// 	switch (element.CountryCode) {
// 		case match.params.id:
// 			console.log(element);
// 			break;
// 	}
// })}


// useEffect(() => {
// 	console.log(match.params.id);
// 	localData();
// 	loopCountry(country);
// }, []);


// const [ todaysDate, setTodaysDate ] = useState();
// 	const [ country, setCountry ] = useState([]);
// 	const [ countryDetail, setCountryDetail ] = useState();

// 	//* THIS FETCHES THE API FROM APITRACKER CURRENTLY INACTIVE, WHILE PROGRAMMING
// 	const fetchData = async () => {
// 		const data = await fetch('https://api.covid19api.com/summary');
// 		//* transfer to JSON
// 		const myData = await data.json();

// 		//* Set data Date
// 		let Date = myData.Date;
// 		console.log(fixDate(Date));
// 		setTodaysDate(fixDate(Date));

// 		//* Set Country Details
// 		setCountry(myData.Countries);
// 		console.log(myData.Countries);
// 	};

// 	//* THIS IS LOCAL JSON FILE USED TO MAKE ALL MY DATA
// 	const localData = () => {
// 		//* Set data Date
// 		let Date = data[0].Date;
// 		console.log('Fixed Date= ', fixDate(Date));
// 		setTodaysDate(fixDate(Date));

// 		//Set Country Details
// 		setCountry(data[0].Countries);
// 	};

// 	//*Functions

// 	const fixDate = (date) => {
// 		let full;
// 		let year = date.slice(0, 4);
// 		let month = date.slice(5, 7);
// 		let day = date.slice(8, 10);
// 		let time = date.slice(12, 19);
// 		full = ` ${day}-${month}-${year}, Time:${time}`;
// 		return full;
// 	};

// 	//* Loops through each country and finds the one that matches the PARAMS. then sets CountryDetail to the match. RETURNS TWICE> HELP
// 	let loopCountry = (country) => {
// 		let CountryName;
// 		country.forEach((element) => {
// 			switch (element.CountryCode) {
// 				case match.params.id:
// 					CountryName = element;
// 					// console.log(element);
// 					break;
// 			}
// 		});
// 		return CountryName;
// 	};