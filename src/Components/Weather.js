import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import Geolocation from './Geolocation';
// import './index.css';

export const MContext = React.createContext();

// Fetch data from API.
function Weather({city}) {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, []);

    if (data) {
        let temp = data.main.temp;
        let tempInC = (temp - 273.15)
        let tempInF = (temp - 273.15) * 9/5 + 32;
        return (
            <>
                <h1>WEATHER:</h1>
                <div>{JSON.stringify(data)}</div>
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.weather[0].description}</p>
                    <p>{tempInC} degrees C</p>
                    <p>{tempInF} degrees F</p>
                </div>
            </>
        )
    }
    return null;
}

function GithubData() {
    return <Weather city="tirana"/>
}

ReactDOM.render(
    <Weather/>,
    document.getElementById('root')
);

export default GithubData;