import React from 'react';
import style from './Section3.module.scss';

function Section3({ img, title, price }) {
  return (
    <div className={style.root}>
      <img src={img} />
      <h1>{title}</h1>
      <p>{price} р</p>
      <button>В корзину</button>
    </div>
  )
}

export default Section3;