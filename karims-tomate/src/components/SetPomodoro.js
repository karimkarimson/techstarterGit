import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { SettingsContext } from '../context/SettingsContext';

const SetPomodoro = () => {
    const {updateContext} = useContext(SettingsContext);
    const [newTimer, setNewTimer] = useState({
        mach: 25,
        kurzepause: 5,
        langepause: 25,
        aktiv: 'mach'
    });

    const andleChange = input => {

    }
    return (
        <div className="form-container">
            <form noValidate>
                <img src={image} />
                <div className="input-container">
                    <input className='input' name='mach' onChange={handleChange} value={newTimer.mach | 0}/>
                    <input className='input' name='kurzepause' onChange={handleChange} value={newTimer.kurzepause | 0}/>
                    <input className='input' name='langepause' onChange={handleChange} value={newTimer.langepause | 0}/>
            </form>
    )
    }