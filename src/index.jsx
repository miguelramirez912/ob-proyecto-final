// Importaciones de react
import React from 'react';
// import { ReactDOM } from 'react';
import ReactDOM from 'react-dom/client';

// Imports de Redux

// Import del componente principal
import App from './components/App';

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// Si trabajamos con redux, aqui podriamos crear el store y aplicar el middleware de Redux Saga

// NODE_ENV.BASE_URL
// Metodo render de ReactDom que nos permite renderizar el componente principal en el index.html
// Forma de renderizar en (React 17)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// Nueva forma de renderizar con createRoot (React 18)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
