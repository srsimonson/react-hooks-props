import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// Fetch data from API.
function GithubUser({login}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, []);

    if (data) {
        return (
            <>
                <div>{JSON.stringify(data)}</div>
                <div>
                    <h1>{data.login}</h1>
                    <img src={data.avatar_url}/>
                </div>
            </>
        )
    }
    return null;
}

function GithubData() {
    return <GithubUser login="srsimonson"/>
}

ReactDOM.render(
    <GithubData/>,
    document.getElementById('root')
);

export default GithubData;