import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Saadat, Route, Switch } from 'react-router-dom';
import data from './Components/data.json';
import Home from './Components/Home';





function App() {

    useEffect(() => {
        // fetchData();
        localData();
    }, []);


    const [global, setGlobal] = useState([]);
    const [todaysDate, setTodaysDate] = useState();
    const [country, setCountry] = useState([]);

    //* THIS FETCHES THE API FROM APITRACKER CURRENTLY INACTIVE, WHILE PROGRAMMING
    const fetchData = async () => {
        const data = await axios('https://api.covid19api.com/summary');
        const myData = data.data;

        //* set Global Data
        console.log(myData);
        setGlobal(myData.Global);

        //* Set data Date
        let Date = myData.Date;
        console.log(fixDate(Date));
        setTodaysDate(fixDate(Date));

        //* Set Country Details
        setCountry(myData.Countries);
        console.log(myData.Countries);
    };

    //* THIS IS LOCAL JSON FILE USED TO MAKE ALL MY DATA
    const localData = () => {
        //* Set Global Data
        setGlobal(data[0].Global);
        console.log('GlobalData=', data[0].Global);

        //* Set data Date
        let Date = data[0].Date;
        console.log('Fixed Date= ', fixDate(Date));
        setTodaysDate(fixDate(Date));

        //* Set Country Details
        setCountry(data[0].Countries);
        console.log(data[0].Countries);
    };


    //* THIS FUNCTION FIXES THE DATE THAT COMES COMPLETELY UNREADABLE
    const fixDate = (date) => {
        let full;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        let time = date.slice(12, 19);
        full = ` ${day}-${month}-${year}, Time:${time}`;
        return full;
    };


    return (
        <Saadat>
            <div className="App">
                <Home key={global} globalData={global} todaysDate={todaysDate} />
            </div>
        </Saadat>
    );
}

export default App;
