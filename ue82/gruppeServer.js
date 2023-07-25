// REST-API that returns cocktail ingredients

// import express
const express = require('express');
const app = express();

// set port and host
const port = 3000;
const host = 'localhost';

// get endpoint /drink with async funtion that fetches data from thecocktaildb.com
app.get('/drink', async (req, res) => {
        let request = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old_fashioned");
        let response = await request.json();
        res.send(response.drinks[0].strInstructionsDE);
});

// start server
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});