import React from 'react';
import { useState } from 'react';

export default function Taskinfo(props) {
    const [task, setTasks] = useState(props.task);
    const taskList = task.subtasks.map((subtask) => (
        <li>{subtask} <button id="makeTask">d'n'c</button></li>
    ));
    return (
        <div id="taskinfo">
            <h1>Task Info</h1>
            <button id="doneButton">Save & Close</button>
            <h2>{task.name}</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={task.name}></input>
            <br></br>
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value={task.category}></input>
            <br></br>
            <label for="priority">Priority:</label>
            <select id="priority" name="priority" value={task.priority}>
                <option value="default">Default</option>
                <option value="high">High</option>
                <option value="low">Low</option>
            </select>

            <label for="fun">Fun:</label>
            <select id="fun" name="fun" value={task.fun}>
                <option value="default">Default</option>
                <option value="fun">Fun</option>
                <option value="not fun">Not Fun</option>
            </select>

            <label for="complexity">Complexity:</label>
            <select id="complexity" name="complexity" value={task.complexity}>
                <option value="default">Default</option>
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
            </select>

            <ul
                role="list"
                className="taskList"
                aria-labelledby="list-heading">
                    Subtasks:
                {taskList}
            </ul>
            <label for="addSubtakst">Add Subtask:</label>
            <input type="text" id="addSubtask" name="addSubtask"></input>
            <button type="button">+ Add</button>
            <br></br>

            <div id="stats">
                <h2>Stats</h2>
                Time Spent: {task.stats.timeSpent}
                <hr></hr>
                Repetitions: {task.stats.repetitions}
                <hr></hr>
                Time Spent: {task.stats.timeSpent}
            </div>
        </div>
    )
};