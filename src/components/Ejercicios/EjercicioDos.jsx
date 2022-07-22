import React, { useState } from 'react';
import useList from '../../hooks/useList';
// ['Limpiar Cuarto', 'Almorzar Temprano', 'Cepillar dientes', 'Bañar al perro']
const EjercicioDos = () => {
    const tasks = useList(['Limpiar Cuarto', 'Almorzar Temprano', 'Cepillar dientes', 'Bañar al perro']);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };
    const handleClear = () => {
      tasks.clear();
    };
    const handleSort = () => {
      tasks.sort();
    };
    const handleRevert = () => {
      tasks.revertList();
    };

    const containerStyles = {
      border: '1px solid black',
      borderRadius: '5px',
      padding: '10px',
      width: '75vw',
      margin: '10px auto',
    };
    return (
      <div style={containerStyles}>
        <h1>Ejercicio 2</h1>
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
                          defaultChecked={false}
                        />
                        {task}
                      </li>
                      ))}
                  </ul>
)}
        <div>
          <button type="button" onClick={handleClear}>Limpiar</button>
          <button type="button" onClick={handleSort}>Ordenar</button>
          <button type="button" onClick={handleRevert}>Invertir</button>
        </div>
      </div>
    );
};

export default EjercicioDos;
