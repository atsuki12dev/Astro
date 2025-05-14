import React from 'react';
import style from './Section4.module.scss';

import { Link } from 'react-router-dom';

function Section4() {
  return (
    <div className={style.root}>
      <div className="textReg">
        <p>Впервые здесь?</p>
        <Link to='/Reg'><p>Зарегистрироваться</p></Link>
      </div>
      <Link to='/Auth'><button>Войти</button></Link>
    </div>
  )
}
export default Section4;