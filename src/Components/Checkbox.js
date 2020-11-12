import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Checkbox() {
    const [checked, toggle] = useReducer( 
        checked => !checked, 
        false);
    // Effects are anything that isn't UI. Alerts, logs, etc.
    // Reducer: takes in current state and returns a new state.

    return (
        <>
        <br/>
            <input 
                type='checkbox' 
                value={checked}
                onChange={toggle}
            />
            {checked ? ' checked' : ' not checked'}
            <br/>
        </>
    )
}

ReactDOM.render(
    <Checkbox/>,
    document.getElementById('root')
);

export default Checkbox;