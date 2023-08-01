import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
export function VotingButton() {
    const [counter, setCounter] = useState(0);
    const toSend = (
        <>
            <h1>Crazy Vote Button with {counter} votes</h1>
            <button onclick={() => setCounter(counter++)}>+</button>
            <p>{counter}</p>
            <button onclick={() => setCounter(counter - 1)}>-</button>
        </>
    );
    return toSend;
}