import React from 'react';
import style from './Section2.module.scss';

import img1 from '../../../../assets/img/Profile/sect2-img1.png';
import img2 from '../../../../assets/img/Profile/sect2-img2.png';
import img3 from '../../../../assets/img/Profile/sect2-img3.png';
import img4 from '../../../../assets/img/Profile/sect2-img4.png';

function Section2() {
  return (
    <div className={style.root}>
      <h1>Подобрали для вас</h1>
      <div className="cards">
        <div className="card">
          <img src={img1} alt="cardImg" />
          <h1>Футболка ТВОЕ</h1>
          <p>500 р</p>
          <button>В корзину</button>
        </div>
        <div className="card">
          <img src={img2} alt="cardImg" />
          <h1>Топ ТВОЕ</h1>
          <p>500 р</p>
          <button>В корзину</button>
        </div>
        <div className="card">
          <img src={img3} alt="cardImg" />
          <h1>Лонгслив ТВОЕ</h1>
          <p>500 р</p>
          <button>В корзину</button>
        </div>
        <div className="card">
          <img src={img4} alt="cardImg" />
          <h1>Лонгслив ТВОЕ</h1>
          <p>500 р</p>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  )
}

export default Section2;