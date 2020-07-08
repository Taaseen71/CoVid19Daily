import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Countries from './Components/Countries';
import { Route, Switch } from 'react-router-dom';
import data from './Components/data.json';
import CountryDetail from './Components/CountryDetail';
import axios from 'axios';


//!https://covid19api.com/
//! https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#cc76052f-6601-4645-80e5-ca7aaa36f8ef



function App() {
    useEffect(() => {
        //! uncomment fetchDate() for live Status
        fetchData();
        // localData();
    }, []);

    const [global, setGlobal] = useState([]);
    const [todaysDate, setTodaysDate] = useState();
    const [country, setCountry] = useState([]);

    //* THIS FETCHES THE API FROM APITRACKER CURRENTLY INACTIVE, WHILE PROGRAMMING
    const fetchData = async () => {
        // const data = await fetch('https://api.covid19api.com/summary');
        // //* transfer to JSON
        // const myData = await data.json();
        const data = await axios('https://api.covid19api.com/summary');
        const myData = data.data;

        //* set Global Data

        setGlobal(myData.Global);

        //* Set data Date
        let Date = myData.Date;

        setTodaysDate(fixDate(Date));

        //* Set Country Details
        setCountry(myData.Countries);

    };

    //* THIS IS LOCAL JSON FILE USED TO MAKE ALL MY DATA
    const localData = () => {
        //* Set Global Data
        setGlobal(data[0].Global);


        //* Set data Date
        let Date = data[0].Date;

        setTodaysDate(fixDate(Date));

        //* Set Country Details
        setCountry(data[0].Countries);

    };

    //* THIS FUNCTION FIXES THE DATE THAT COMES COMPLETELY UNREADABLE
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

        <div className='App'>
            <Nav />
            <Switch>
                <Route path='/' exact>
                    <Home
                        key={global}
                        globalData={global}
                        todaysDate={todaysDate}
                    />
                </Route>
                <Route exact path='/countries'>
                    <Countries
                        key={country}
                        countryList={country}
                        todaysDate={todaysDate}
                    />
                </Route>
                <Route exact
                    path='/countries/:id'
                >
                    <CountryDetail
                        key={country}
                        countryDetail={country} />
                </Route>
					//https://stackoverflow.com/questions/43456656/react-router-v4-routes-not-working
					make it a component
				</Switch>
        </div>

    );
}

export default App;
