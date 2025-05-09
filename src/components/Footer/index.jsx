import React from 'react';
import style from './Footer.module.scss';

import tg from '../../assets/img/TG.png';
import fb from '../../assets/img/FB.png';
import vk from '../../assets/img/VK.png';
import ex from '../../assets/img/EX.png';

function Footer() {
  return (
    <div className={style.root}>
        <div className="contacts">
          <p>+79243291280</p>
          <p>astro@shop.com</p>
        </div>
        <div className="copyright">
          <p>Copyright 2024 @ Интернет магазин одежды astro</p>
        </div>
        <div className="menu">
          <img src={tg} alt="TG" />
          <img src={fb} alt="FB" />
          <img src={vk} alt="VK" />
          <img src={ex} alt="EX" />
        </div>
    </div>
  )
}
export default Footer;