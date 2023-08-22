const express = require('express')
const router = express.Router()
const pool = require('./connect');


router.get('/', (req, res) => {
    console.log('GET /api/nachricht ', req.ip);
    // Hier soll eine Datenbankabfrage erfolgen
    // MySQL Datenbank mit der Tabelle Nachricht
    pool.query(`SELECT title FROM Nachricht`, (error, result) => {
        if (error) {
            return console.log(error);
        }
        res.json(result);
    });
});

router.post('/create', (req, res) => {
    pool.query(`INSERT INTO Nachricht(title) VALUES(?)`, [req.body.title], (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Nachricht wurde erstellt ${req.body.title}`)
        res.json(result);
    });
});

router.put('/update', (req, res) => {
    console.log('PUT /api/nachricht/update ', req.ip);
    pool.query(`UPDATE Nachricht SET title= ?`, [req.body.title], (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Nachricht wurde geändert ${req.body.title}`)
        res.json(result);
    });
});

router.delete('/delete', (req, res) => {
    pool.query(`DELETE FROM Nachricht WHERE title = ?`, [req.body.title], (error, result) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Nachricht wurde gelöscht ${req.body.title}`)
        res.json(result);
    });
});

module.exports = router
