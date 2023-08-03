import React from 'react';
import Button from '@mui/material/Button';
import SchoolIcon from '@mui/icons-material/School'; // Graduation Cap - für Mach
import ChildCareIcon from '@mui/icons-material/ChildCare'; // Child Face - für Kurze Pause
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Pokal - für Lange Pause
import SportsIcon from '@mui/icons-material/Sports'; // Trillerpfeife - für Unterbrechung


export default function Buttons() {
    return (
        <div className='button-group'>
            <Button id="buttonDo" variant="contained" color="secondary" startIcon={<SchoolIcon fontSize="large"/>}>
                Let's do it! 25min
            </Button>
            <Button id="buttonShort" variant="outlined" color="secondary" startIcon={<ChildCareIcon fontSize="large"/>}>
                Keep Calm & Relax 5 min 
            </Button>
            <Button id="buttonLong" variant="outlined" color="secondary" startIcon={<EmojiEventsIcon fontSize="large"/>}>
                Treat yourself! 25 min
            </Button>
            <Button id="buttonPause" variant="contained" color="primary" startIcon={<SportsIcon fontSize="large"/>}>
                Pause
            </Button>
        </div>
    );
};

// three buttons: mach(25), kurzepause(5), langepause(25)
// countdown
// tasklist