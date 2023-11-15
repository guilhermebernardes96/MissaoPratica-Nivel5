import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <Link to="/livros" className="navbar-brand">
            Catálogo
          </Link>
          <Link to="/livro/1" className="navbar-brand">
            Novo
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/livro/1" element={<LivroDados />} />
        <Route path="/livros" element={<LivroLista />} />
      </Routes>
    </Router>
  );
}

export default App;
