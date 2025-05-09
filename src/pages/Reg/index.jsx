import React from 'react';
import style from './Reg.module.scss';

import img from '../../assets/img/Reg/img.png';

function Reg() {
  return (
    <div className={style.root}>
      <div className="reg">
        <div className="col1">
          <img src={img} alt="img" />
        </div>
        <div className="col2">
          <h1>Создать аккаунт</h1>
          <div className="inputs">
            <input type="text" placeholder='Фамилия' />
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Эл. почта' />
            <input type="text" placeholder='Пароль' />
            <div className="checkBox">
              <input type="checkbox" />
              <p>Запомнить меня</p>
            </div>
          </div>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
export default Reg;