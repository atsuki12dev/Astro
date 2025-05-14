import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/ASTRO.svg';
import cart from '../../assets/img/Cart.png';
import profile from '../../assets/img/Profile.png';

function Header() {
  return (
    <div className={style.root}>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <div className="nav">
            <Link to='/'><p>Главная</p></Link>
            <Link to='/Catalog'><p>Каталог</p></Link>
            <Link to='/Item'><p>Товары</p></Link>
            <Link to='/AboutUs'><p>О нас</p></Link>
            <Link to='/Contacts'><p>Контакты</p></Link>
        </div>
        <div className="menu">
            <Link to='/Cart'><img src={cart} alt="cart" /></Link>
            <Link to='/Profile'><img src={profile} alt="profile" /></Link>
        </div>
    </div>
  )
}
export default Header;