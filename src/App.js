import React from 'react';
import './App.css';
import Books from './components/Books';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import NewBook from './components/NewBook';

function App() {
  return (
    <>
      <Router >
        <NavBar />
        <Routes >
          <Route path="/" component={<Books />} />
          <Route path="/" component={<NewBook />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
