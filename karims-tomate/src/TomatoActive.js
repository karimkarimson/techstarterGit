import React from 'react';
import TasksActive from './TasksActive';

export default function TomatoActive(props) {
    return (
        <div id="tomatoactive">
            <button id="allTasksDone">***</button>
            <button id="pause">||</button>
            <section id="timer">
                <h1>00:06</h1>
            </section>
            <section id="tasks">
                <TasksActive tasklist={props.tasklist}/>
            </section>
        </div>
    )
}