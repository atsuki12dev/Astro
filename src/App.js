import React from 'react';
import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import Reg from './pages/Reg';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import Item from './pages/Item';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Reg' element={<Reg />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='/Item' element={<Item />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;