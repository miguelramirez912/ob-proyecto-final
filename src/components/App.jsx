import React from 'react';
import EjercicioDos from './Ejercicios/EjercicioDos';
import EjercicioUno from './Ejercicios/EjercicioUno';
// import TaskList from './List/TaskList';
// import Settings from './settings/Settings';
import '../styles/css/index.scss';

/**
 * Función anonima para crear un componente principal.
 * @returns {React.Component} Componente principal de la aplicación.
 */
const App = () => {
  return (
    <div>
      {/* <TaskList />
      <Settings /> */}
      <EjercicioUno />
      <EjercicioDos />
    </div>
  );
};

export default App;
