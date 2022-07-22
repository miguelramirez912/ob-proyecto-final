import React, { useState } from 'react';
import useList from '../../hooks/useList';

const TaskList = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
      <div>
        <h1>Task List</h1>
        <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button type="submit">Add Task</button>
        </form>
        { (tasks.isEmpty())
                ? <p>Task List is Empty</p>
                : (
                  <ul>
                    { tasks.value.map((task, index) => (
                      <li key={index}>
                        <input
                          type="checkbox"
                          onClick={() => tasks.remove(index)}
                          checked={false}
                        />
                        {task}
                      </li>
                      ))}
                  </ul>
)}

      </div>
    );
};

export default TaskList;
