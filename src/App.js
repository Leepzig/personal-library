import React from 'react';
import './App.css';
import Books from './components/Books';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import NewBook from './components/NewBook';

function App() {
  return (
    <>
      <Router >
        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="/series/new" element={<NewBook />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
