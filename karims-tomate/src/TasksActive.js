import React from 'react';
import { useState } from 'react';

export default function TasksActive(props) {
    const [tasks, setTasks] = useState(props.tasklist);
    const taskList = tasks.map((task) => (
        <>
        <label for={task.name}>{task.name}</label>
        <input type="checkbox" name={task.name}></input>
        </>
    ));
    return (
        <div id="tasksactive">
            <section id="activeTasks">
                <h1>Active Tasks</h1>
                <ul
                    role="list"
                    className="taskList"
                    aria-labelledby="list-heading">
                        {taskList}
                </ul>
            </section>
            <section id="quicknotes">
                <label for="quicknotes">Quick Notes:</label>
                <textarea id="quicknotes" name="quicknotes" rows="4" cols="20"></textarea>
            </section>
        </div>
    );
}
