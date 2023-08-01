import React from 'react';
import ReactDOM from 'react-dom/client';
export function Clock() {
    // function that gets the current hours, minutes and seconds
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // return the current time
    return (
        <span>
            {hours.toLocaleString()}:{minutes.toLocaleString()}:{seconds.toLocaleString()}
        </span>
    );
}