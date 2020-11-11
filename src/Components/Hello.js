import React from 'react';
import ReactDOM from 'react-dom';

// function Hello(props) {
// DESTRUCTURED
    function Hello( {library, message, number}) {
    // console.log('props:', props);
    // console.log('Object.keys(props):', Object.keys(props));

    
    return (
        <div>
            {/* <h1>Welcome to {props.library}</h1>
            <p>{props.message}</p>
            <p>{Object.keys(props).length} should be 3</p> */}
            <h1>Welcome to {library}!</h1>
            <p>{message}</p>
            <p>{number}</p>
        </div>
    )
}

ReactDOM.render(
    <Hello
        library="React"
        message="I love printing twice!"
        number={3}
    />,
    document.getElementById("root")
);

export default Hello;
