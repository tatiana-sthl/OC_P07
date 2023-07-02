import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Housing from './pages/housing/Housing';

export default function App() {
  return (
    // Définit le contexte des routes.
    <Router>
      {/* Contient les différentes routes de l'application */}
      <Routes>
      {/* Définit une route spécifique */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        {/* Toutes les autres URL qui ne correspondent pas aux routes précédentes affichent le composant Error */}
        <Route path="*" element={<Error />} /> 
      </Routes>
    </Router>
  );
}

