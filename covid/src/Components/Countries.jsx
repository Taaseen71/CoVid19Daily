import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Countries(props) {


    const [input, handleInput] = useState("")


    //* this handles the input field to match with a country

    const capitalize = (str) => {
        if (typeof str !== "string") return '';
        return str.replace(/\w\S*/g,
            function (character) {
                return character.charAt(0).toUpperCase() + character.substr(1)
            });
        //* Taken straight from hw lol
    }

    const handleClick = (e) => {
        e.preventDefault();

        console.log(input)

        //* this will match the countryList for whatever we list on our input 


        let newUrl = matchCountry(input)

        //! I AM SO PROUD OF THIS LAST PART :D :D :D :D :D :D :D. 
        //! I literally screamed when this worked on first try

        return window.location.href = `/countries/${newUrl}`
        //https://stackoverflow.com/questions/52887815/how-do-i-redirect-user-to-another-page-after-submit-the-form-in-react-js
    }

    //* This function will match the countries and then ONLY RETURN countryCode
    const matchCountry = (input) => {
        if (props.countryList.find(countryName => countryName.Country == input)) {
            const detail = props.countryList.find(countryName => countryName.Country == input)
            if (!detail) return (<h1>Loaded</h1>);
            console.log("detail", detail.CountryCode)
            return detail.CountryCode
        }
        else if (props.countryList.find(countryName => countryName.CountryCode == input)) {
            const detail = props.countryList.find(countryName => countryName.CountryCode == input)
            if (!detail) return (<h1>Loaded</h1>);
            console.log("detail", detail.CountryCode)
            return detail.CountryCode
        }
        else if (props.countryList.find(countryName => countryName.Slug == input)) {
            const detail = props.countryList.find(countryName => countryName.Slug == input)
            if (!detail) return (<h1>Loaded</h1>);
            console.log("detail", detail.CountryCode)
            return detail.CountryCode
        }
    }



    return (
        <div className='divCountries'>
            <h3>{props.todaysDate}</h3>

            <div>
                <form onSubmit={handleClick}>
                    <label> Search Country Name: </label>
                    <input type="text" value={input} requied onChange={e => handleInput(e.target.value)} />
                    {/* <input type="submit" value="search Country" /> */}
                    <button type="submit" className="buttonSearch"> Search </button>
                </form>

            </div>

            <div className='countryListWrapper'>
                {props.countryList.map((countryList) => (
                    <Link
                        className='countryNames'
                        to={`/countries/${countryList.CountryCode}`}
                        key={countryList.Country}
                    >
                        <h6>{countryList.Country}</h6>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Countries;
