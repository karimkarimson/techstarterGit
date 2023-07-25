// localhost server test with axios

const axios = require('axios');

const port = 3000;
const host = 'localhost';

// get request to localhost:3000/drink
axios.get(`http://${host}:${port}/drink`)
    .then(res => {
        // print out data in console
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });