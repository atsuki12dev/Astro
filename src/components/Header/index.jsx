import React from 'react';
import style from './Header.module.scss';

import logo from '../../assets/img/ASTRO.svg';
import cart from '../../assets/img/Cart.png';
import profile from '../../assets/img/Profile.png';

function Header() {
  return (
    <div className={style.root}>
        <img src={logo} alt="logo" />
        <div className="nav">
            <p>Главная</p>
            <p>Каталог</p>
            <p>Товары</p>
            <p>О нас</p>
            <p>Контакты</p>
        </div>
        <div className="menu">
            <img src={cart} alt="cart" />
            <img src={profile} alt="profile" />
        </div>
    </div>
  )
}
export default Header;