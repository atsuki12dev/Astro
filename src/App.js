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
  const CartValue = [

  ];

  function addCartValue(id, title, price){
    CartValue.push({
      "id": id,
      "title": title,
      "price": price
    });
  }
  function removeCartValue(index){
    CartValue.splice(obj => obj.id == index ? obj.id : index, 1);
  }

  addCartValue(0, "title1", 2500);
  addCartValue(1, "title2", 3500);
  addCartValue(2, "title3", 4500);

  removeCartValue(1);

  console.log(CartValue);

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path='/Astro/' element={<Main />} />
        <Route path='/Astro/Reg' element={<Reg />} />
        <Route path='/Astro/Auth' element={<Auth />} />
        <Route path='/Astro/Catalog' element={<Catalog />} />
        <Route path='/Astro/Item' element={<Item />} />
        <Route path='/Astro/Cart' element={<Cart />} />
        <Route path='/Astro/Profile' element={<Profile />} />
        <Route path='/Astro/AboutUs' element={<AboutUs />} />
        <Route path='/Astro/Contacts' element={<Contacts />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;