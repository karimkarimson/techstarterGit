// nodejs server with express and axios, to get data about a city from openweathermap.org and print out in console.

// import express and axios
const express = require('express');
const app = express();
const axios = require('axios');

const port = 3000;
const host = 'localhost';
// INSERT OPEN WEATHER API KEY HERE



console.log('Please enter the city name and press enter: ');
// take input from console and save string when enter is pressed
process.stdin.on('data', (data) => {
    // convert input to string
    let cityName = data.toString().trim();
    // end process when enter is pressed
});
// get geodata from geocoder
let awaitRes = false;
function getCityCoodinates(cityName) {
    const urlGeoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIkey}`;
    axios.get(urlGeoCode)
        .then(res => {
            // save res.lat and res.lan in variables then call openweathermap.org
            let lat = res.lat;
            let lon = res.lon;
            let awaitRes = true;
        })
        .catch(err => {
            // print out error in console
            console.log(err);
        });
}
function getWeatherData(lat, lon) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`)
        .then(res2 => {
            // print out data in console
            console.log(`Es sind ${res2.main.temp} Grad in ${cityName}!`);
        })
        .catch(err => {
            // print out error in console
            console.log(err);
        });
}
if (awaitRes) {
    getWeatherData(lat, lon);
}