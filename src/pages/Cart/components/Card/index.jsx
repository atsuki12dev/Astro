import React from 'react';
import style from './Card.module.scss';

import size from '../../../../assets/img/Cart/Btn.png';
import krestik from '../../../../assets/img/Cart/krestik.png';

function Card({img, title, price}) {
  return (
    <div className={style.root}>
      <img src="" alt="img" />
      <div className="text">
        <p>Футболка оверсайз с принтом <br />картины Мона Лизы</p>
        <p>ТВОЕ</p>
      </div>
      <img src={size} alt="size" />
      <div className="plusAndMinus">
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <p>2300 р</p>
      <img src={krestik} alt="krestik" />
    </div>
  )
}

export default Card;