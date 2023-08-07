import React, {useState} from 'react';

export default function TomatoMain(props) {
    const [tasks, setTasks] = useState(props.tasklist);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const allTasksList = tasks.map((task) => (
        <>
        <label for={task.name}>{task.name}</label>
        <input type="checkbox" name={task.name}></input>
        </>
    ));
    const selectedTasksList = selectedTasks.map((task) => (
        <>
        <label for={task.name}>{task.name}</label>
        <input type="checkbox" name={task.name}></input>
        </>
    ));

    return (
        <div id="tomatoMain">
            <button id="workTime">Let's do this</button>
            <button id="shortBreakTime">Take a short break</button>
            <button id="longBreakTime">Take a long break</button>
            <button id="customTime">My time</button>
            <section id="containerAllTasks">
                All tasks:
                <ul
                    role="list"
                    className="taskList"
                    aria-labelledby="list-heading">
                        {allTasksList}
                </ul>
            </section>
            <section id="containerSelectedTasks">
                Selected tasks:
                <ul
                    role="list"
                    className="taskList"
                    aria-labelledby="list-heading">
                        {selectedTasksList}
                </ul>
            </section>
            <section id="containerAddTask">
                <label for="addTask">Add Task:</label>
                <input type="text" id="addTask" name="addTask"></input>
                <button type="button">+ Add</button>
            </section>
            <section id="containerQuicknotes">
                <label for="quicknotes">Quick Notes:</label>
                <textarea id="quicknotes" name="quicknotes" rows="4" cols="20"></textarea>
            </section>
            <section id="containerStats">
                <h1>Stats</h1>
                <p>Total tasks completed: ?</p>
                <p>Tasks remaining: ?</p>
                <p>Tasks repeated: ?</p>
                <p>Tasks rethought: ?</p>
            </section>
        </div>
    );
}