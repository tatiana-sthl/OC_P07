import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//définir le point d'entrée de l'application dans l'élément DOM avec l'ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //StrictMode active des vérifications supplémentaires et des avertissements en mode développement pour aider à détecter les problèmes potentiel
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

