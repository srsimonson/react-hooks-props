import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Components/OldApp';
import App from './Components/App';
import Hello from './Components/Hello';
import Checkbox from './Components/Checkbox';
import Inputs from './Components/Inputs';
import GithubData from './Components/GithubData';
import Weather from './Components/Weather';

// import Hello from './Components/Hello';

// let city = {
//   name: 'Madrid',
//   country: 'Spain'
// };

// const lakeList = ['Echo Lake', 'Lake Eerie', 'Lake Pepin']

const lakeList = [
  { id: '1', name: 'Echo', trailhead: 'Echo' },
  { id: '2', name: 'Pepin', trailhead: 'Colvill' },
  { id: '3', name: 'Superior', trailhead: 'Duluth' },
]

ReactDOM.render(
  <React.StrictMode>
    <App 
      lakes={lakeList}
      season='summer'
      
    />
    <Checkbox/>
    <Inputs/>
    <Hello/>
    <GithubData/>
    <Weather/>
    {/* <Hello/> */}
  </React.StrictMode>,

  // ReactDOM.render takes in 2 arguments. Element we want to create, and where we want to render it
  // React.createElement takes in 3 elements: tag, properties, and children.
  // You can also createElement as the 3rd argument.

    // React.createElement('div', {style: {color: 'blue'} }, React.createElement('h1', null, 'Hi again!')),

    // <h1>Hello from {city.name} in {city.country}!</h1>,
  document.getElementById('root')
);