import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School'; // Graduation Cap - für Mach
import ChildCareIcon from '@mui/icons-material/ChildCare'; // Child Face - für Kurze Pause
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Pokal - für Lange Pause
import SportsIcon from '@mui/icons-material/Sports'; // Trillerpfeife - für Unterbrechung

export default function Timer(props) {
    const [newTimer, setNewTimer] = useState(0);
    function interruptTimer() {
        console.log("Timer unterbrochen");
    }
    const [newIntervall, setNewIntervall] = useState(0);
    function timer() {
        console.log("hallo from timer");
        console.log("timespan: " + newTimer);
        let intervallTimer = setInterval(() => {
            setNewTimer(newTimer - 1);
            console.log("Current Countdown = " + newTimer + "min");
            if (newTimer === 0) {
                clearInterval(intervallTimer);
            } else {
                console.log("Countdown läuft: " + newTimer + "min");
            };
        }, 1000);
    }
    return (
        <Grid
            container
            columns={{ xs: 1, lg: 2 }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
                <h1>{newTimer}</h1>
            </Grid>
            <Grid item>
                <Button id="buttonDo" onClick={() => {setNewTimer(25); console.log("newTimer = " + newTimer); timer();}} variant="contained" color="secondary" startIcon={<SchoolIcon fontSize="large"/>}>
                    Let's do it! 25min
                </Button>
            </Grid>
            <Grid item>
                <Button id="buttonShort" onClick={() => setNewTimer("kurzepause")} variant="outlined" color="secondary" startIcon={<ChildCareIcon fontSize="large"/>}>
                    Keep Calm & Relax 5 min 
                </Button>
            </Grid>
            <Grid item>
                <Button id="buttonLong" onClick={() => setNewTimer("langepause")} variant="outlined" color="secondary" startIcon={<EmojiEventsIcon fontSize="large"/>}>
                    Treat yourself! 25 min
                </Button>
            </Grid>
            <Grid item>
                <Button id="buttonPause" onClick={() => interruptTimer()} variant="contained" color="primary" startIcon={<SportsIcon fontSize="large"/>}>
                    Pause
                </Button>
            </Grid>
        </Grid>
    );
};

// three buttons: mach(25), kurzepause(5), langepause(25)
// countdown
// tasklist