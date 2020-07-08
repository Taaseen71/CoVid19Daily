import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

function Countries(props) {


    const [input, handleInput] = useState("")
    const [submitted, setSubmitted] = useState(false)

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
        if (!matchCountry(input)) {
            return
        }
        setSubmitted(true);
    }

    //* This function will match the countries and then ONLY RETURN countryCode
    const matchCountry = (input) => {
        // if (props.countryList.find(countryName => countryName.Country === input)) {
        //     const detail = props.countryList.find(countryName => countryName.Country === input)
        //     if (!detail) return (<h1>Loaded</h1>);
        //     console.log(detail);
        //     return detail.CountryCode
        // }
        // else if (props.countryList.find(countryName => countryName.CountryCode === input)) {
        //     const detail = props.countryList.find(countryName => countryName.CountryCode == input)
        //     if (!detail) return (<h1>Loaded</h1>);
        //     console.log(detail);
        //     return detail.CountryCode
        // }
        // else if (props.countryList.find(countryName => countryName.Slug === input)) {
        //     const detail = props.countryList.find(countryName => countryName.Slug == input)
        //     if (!detail) return (<h1>Loaded</h1>);
        //     console.log(detail);
        //     return detail.CountryCode
        // }
     
       
       if (input.length === 2) {
           if (props.countryList.find(countryName => countryName.CountryCode === input.toUpperCase())) {
               console.log(input.toUpperCase())
               const detail = props.countryList.find(countryName => countryName.CountryCode === input.toUpperCase())
               if (!detail) return (<h1>Loaded</h1>);
                   console.log(detail);
                   return detail.CountryCode
           }
       }

       else if (input.length > 2 ) {   
                if (props.countryList.find(countryList => countryList.Country.toLowerCase().includes(input.toLowerCase()))){
                       console.log(input)
                       const detail = props.countryList.find(countryList => countryList.Country.toLowerCase().includes(input.toLowerCase()))
                       if (!detail) return (<h1> Loaded </h1>);
                       console.log(detail);
                       return detail.CountryCode;
                   }
                   else {
                    console.log("not found")
                }
        
       }
        else {
            console.log("not found")
        }

    }



    return (
        <div className='divCountries'>
            <h3>{props.todaysDate}</h3>

            <div>
                <form onSubmit={handleClick}>
                    <label id="countryName"> Search Country Name: </label>
                    <input type="text" value={input} requied onChange={e => handleInput(e.target.value)} />
                    {/* <input type="submit" value="search Country" /> */}
                    <button className="buttonSearch">Search</button>
                    {submitted && <Redirect to={`/countries/${matchCountry(input)}`} />}
                </form>
                <br/>
                <br/>
            </div>

            <div>

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
