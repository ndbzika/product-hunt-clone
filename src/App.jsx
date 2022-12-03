import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import { Header } from './components/Header';

import './App.scss';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
