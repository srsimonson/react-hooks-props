import React, { Component } from 'react';
// import './App.css';
// import GalleryList from '../GalleryList/GalleryList';
// import axios from 'axios';

class Geolocation extends Component {

componentDidMount() {
    this.getGeolocation()
}

getGeolocation = () => {
    navigator.geolocation.getCurrentPosition( function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
        let lat = position.coords.latitude
        let long = position.coords.longitude
    })
    
  }

  render() {
    return (
      <div className="App">
        <h1>Hi from Geolocation</h1>
      </div>
    );
  }
}

export default Geolocation;