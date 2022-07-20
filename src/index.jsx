// Importaciones de react
import React from 'react';
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom';

// Imports de Redux

// Import del componente principal
import App from './components/App';

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// Si trabajamos con redux, aqui podriamos crear el store y aplicar el middleware de Redux Saga

// NODE_ENV.BASE_URL
// Metodo render de ReactDom que nos permite renderizar el componente principal en el index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
