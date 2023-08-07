import React from 'react';
import ReactDOM from 'react-dom/client';
// import Taskinfo from './Taskinfo';
// import TomatoActive from './TomatoActive.js';
import TomatoMain from './TomatoMain.js';

const testTask1 = {
    name:"Test Task",
    catefory:"Test Category",
    priority: "default",
    fun: "default",
    complexity: "default",
    subtasks: ["subtask1", "subtask2", "subtask3"],
    status: "open",
    stats: {
        timeSpent: 0,
        repetitions: 0,
        rethought: false
    }
}
const testTask2 = {
    name:"Test Task2",
    catefory:"Test Category2",
    priority: "default",
    fun: "default",
    complexity: "default",
    subtasks: ["subtask1", "subtask2", "subtask3"],
    status: "open"
}
const testTask3 = {
    name:"Test Task3",
    catefory:"Test Category3",
    priority: "default",
    fun: "default",
    complexity: "default",
    subtasks: ["subtask1", "subtask2", "subtask3"],
    status: "open"
}
const testactiveTasks = [testTask1, testTask2, testTask3];

    // <Taskinfo task={testTask1}/>
    // <TomatoActive tasklist={testactiveTasks}/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TomatoMain tasklist={testactiveTasks}/>
  </React.StrictMode>
);