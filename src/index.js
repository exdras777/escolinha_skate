import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa os ícones do Bootstrap (opcional, mas útil)
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importa seu CSS customizado (DEPOIS do Bootstrap para sobrescrever)
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);