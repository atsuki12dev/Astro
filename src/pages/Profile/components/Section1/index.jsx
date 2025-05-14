import React from 'react';
import style from './Section1.module.scss';

import avatar from '../../../../assets/img/Profile/sect1-profile.png';
import rec from '../../../../assets/img/Profile/sect1.png';
import banner from '../../../../assets/img/Profile/banner.png';

function Section1() {
  return (
    <div className={style.root}>
      <div className="col1">
        <div className="title">
          <img src={avatar} alt="avatar" />
          <h1>Айдар Мазитов</h1>
          <p>изменить профиль</p>
        </div>
        <div>Личные данные</div>
        <div>Список желаний</div>
        <div>Доставка</div>
        <div>Покупки</div>
        <div>Возврат</div>
        <div className="del">
          <p>выйти </p>
          <p>Удалить профиль</p>
        </div>
      </div>
      <div className="col2">
        <img src={rec} alt="rec" />
        <img src={banner} alt="banner" />
      </div>
    </div>
  )
}

export default Section1;