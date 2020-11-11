import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Inputs() {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');

    // useEffect hook will fire all the time, unless the 2nd dependency array is in place.
        // Helps not trigger unncecssary re-renders. See below, can have multiple values in the array.
    // useEffect(() => {
    //     console.log(`Value 1 best food: ${val1}`);
    // } )

    useEffect(() => {
        console.log(`Value 1 best food: ${val1}`);
    }, [val1])

    useEffect(() => {
        console.log(`Value 1 best food: ${val1}`);
    }, [val1, val2])
    
    return (
        <>
            <br/>
            <label>
                Best Food:
                <input 
                    value={val1}
                    onChange={event => setVal1(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Worst Food:
                <input
                    value={val2}
                    onChange={event => setVal2(event.target.value)}
                />
            </label>
        </>
    )
}
ReactDOM.render(
    <Inputs/>,
    document.getElementById('root')
);

export default Inputs;