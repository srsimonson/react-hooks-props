import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// Fetch data from API.
function RandomGif({rating}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=&rating=${rating}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, []);

    if (data) {
        console.log('data: ', data.data);
        let gif = data.data.images.fixed_width.url
        return (
            <>
                <h1>Random Gif:</h1>
                <div><img src={gif}/></div>
                {/* <div>{JSON.stringify(data)}</div> */}
            </>
        )
    }
    return null;
}

function RandomGifData() {
    return <RandomGif rating="r"/>
}

ReactDOM.render(
    <RandomGif/>,
    document.getElementById('root')
);

export default RandomGifData;