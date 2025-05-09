import React from 'react';
import style from './Section4.module.scss';

function Section4() {
  return (
    <div className={style.root}>
      <div className="textReg">
        <p>Впервые здесь?</p>
        <p>Зарегистрироваться</p>
      </div>
      <button>Войти</button>
    </div>
  )
}
export default Section4;