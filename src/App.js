import React from 'react';
import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './_components/Header';
import Footer from './_components/Footer';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path='/Astro/' element='' />
        
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;