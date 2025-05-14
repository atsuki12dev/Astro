import React from 'react';
import style from './Contacts.module.scss';

import map from '../../assets/img/Contacts/map.png';

function Contacts() {
  return (
    <div className={style.root}>
      <img src={map} />
      <div className="form">
        <h1>Обратная связь</h1>
        <input type="text" placeholder='Имя'/>
        <input type="text" placeholder='Почта'/>
        <input type="text" placeholder='Телефон'/>
        <input type="text" placeholder='Комментарий'/>
        <button>Отправить</button>
      </div>
    </div>
  )
}
export default Contacts;