import React, { useState, useEffect } from 'react';
import '../App.css';


function Home(props) {
  useEffect(() => {
    console.log("Props Works but doesnt show first =", props.globalData.NewConfirmed);
  }, []);

  return (
    <div className='Home'>
      <h1>{`Today's Date: ${props.todaysDate}`}</h1>
      <h1>{`New Confirmed: ${props.globalData.NewConfirmed}`}</h1>
      <h1>{`New Deaths: ${props.globalData.NewDeaths}`}</h1>
      <h1>{`New Recovered: ${props.globalData.NewRecovered}`}</h1>
      <h1>{`Total Confirmed Cases: ${props.globalData.TotalConfirmed}`}</h1>
      <h1>{`Total Recovered Cases: ${props.globalData.TotalRecovered}`}</h1>
    </div>
  );
}

export default Home;



//! Old fixDate method. use only if the other one doesnt work

// const fixDate = (date) => {
//   let Array= [];
//   let returnStatement = []
//   let firstSplit= date.match(/(.{1,10})/g);
//   Array.push(firstSplit[0])
//   Array.push(firstSplit[1]);
//   let secondSplit = Array[1].match(/(.{1,9})/g)

//   returnStatement.push(Array[0]);
//   returnStatement.push(secondSplit[0]);

//   let finalResult = returnStatement.join(', ')

//   return finalResult;
// }

//! this method was was for testing. works fine

//   useEffect (() => {
//     // fetchData();
//     localData();

//   },[])

//   const [global, setGlobal] = useState([]);
//   const [todaysDate, setTodaysDate] = useState()

//   const fetchData = async () => {
//     const data= await fetch('https://api.covid19api.com/summary');

//     const myData = await data.json();
//     console.log(myData);
//     setGlobal(myData.Global);
//   }

//   const localData = () => {
//     setGlobal(data[0].Global);
//     console.log(data[0].Date);
//     let Date = data[0].Date;
//     console.log(fixDate(Date));
//     setTodaysDate(fixDate(Date));

//   }

//  const fixDate = (date) => {

//    let full;
//     let year= date.slice(0,4)

//     let month = date.slice(5,7)
//     let day= date.slice(8,10)
//     let time = date.slice(12,19)
//     full= ` ${day}-${month}-${year}, Time:${time}`

//     return full;
//   }

//   return (
//     <div className="Home">
//       <h1>{`Today's Date: ${todaysDate}`}</h1>
//     <h1>{`New Confirmed: ${global.NewConfirmed}`}</h1>
//     <h1>{`New Deaths: ${global.NewDeaths}`}</h1>
//     <h1>{`New Recovered: ${global.NewRecovered}`}</h1>
//     <h1>{`Total Confirmed Cases: ${global.TotalConfirmed}`}</h1>
//     <h1>{`Total Recovered Cases: ${global.TotalRecovered}`}</h1>
//     </div>

// );
