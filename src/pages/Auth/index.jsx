import React from 'react';
import style from './Auth.module.scss';

function Auth() {
  return (
    <div className={style.root}>
      <div className="form">
        <h1>Вход</h1>
        <div className="inputs">
          <input type="text" placeholder='Логин или e-mail' />
          <input type="text" placeholder='Пароль' />
        </div>
        <div className="singUp">
          <button>Войти</button>
          <div className="help">
            <p>не помню <br />пароль</p>
            <p>не пришел <br />код?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Auth;