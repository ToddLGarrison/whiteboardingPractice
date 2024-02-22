import { text } from 'express';
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import taskReducer from './tasksReducer.js';

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddTask(task) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,
        })
    }

    function handleDeleteTask(task) {
        dispatch({
            type: 'deleted',
            id: task.id,
        })
    }
    
    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
        />
        </>
    );
}

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];