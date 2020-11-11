import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    // Effects are anything that isn't UI. Alerts, logs, etc.
    useEffect(() => {
        console.log(`checked: ${checked.toString()}`)
    })
    return (
        <>
            <input 
                type='checkbox' 
                value={checked}
                onChange={() => 
                    setChecked(checked => !checked)}
            />
            {checked ? 'checked' : 'not checked'}
        </>
    )
}

ReactDOM.render(
    <Checkbox/>,
    document.getElementById('root')
);

export default Checkbox;