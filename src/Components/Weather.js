import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// Fetch data from API.
function Weather({city}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        // fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=&rating=g`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, []);

    if (data) {
        return (
            <>
                <h1>WEATHER:</h1>
                <div>{JSON.stringify(data)}</div>
                <div>
                    {/* <h1>{data}</h1> */}
                </div>
            </>
        )
    }
    return null;
}

function GithubData() {
    return <Weather city="Tirana"/>
}

ReactDOM.render(
    <Weather/>,
    document.getElementById('root')
);

export default GithubData;