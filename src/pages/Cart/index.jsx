import React from 'react';
import style from './Cart.module.scss';

import strelka from '../../assets/img/Cart/strelka.png';
import FAQ from '../../assets/img/Cart/FAQ.png';

import Card from './components/Card';

function Cart() {
  return (
    <div className={style.root}>
      <div className="block">
        <h1>Корзина</h1>
        <div className="row1">
          <p>Товар</p>
          <div className="text">
            <p>Размер</p>
            <p>Кол-во</p>
            <p>Цена</p>
          </div>
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="row2">
          <div className="shop">
            <img src={strelka} alt="strelka" />
            <p>Продолжить покупки</p>
          </div>
          <div className="result">
            <div className="text">
              <p>Итого:</p>
              <p>Скидка:</p>
            </div>
            <div className="value">
              <p>0 р</p>
              <p>0 р</p>
            </div>
          </div>
        </div>
        <button className='btn'>Оформить заказ</button>
        <div className="FAQ">
          <img src={FAQ} alt="FAQ" />
        </div>
      </div>
    </div>
  )
}
export default Cart;