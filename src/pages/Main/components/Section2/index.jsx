import React from 'react';
import style from './Section2.module.scss';

import img1 from '../../../../assets/img/Main/Sect2-img1.png';
import img2 from '../../../../assets/img/Main/Sect2-img2.png';
import img3 from '../../../../assets/img/Main/Sect2-img3.png';
import img4 from '../../../../assets/img/Main/Sect2-img4.png';

function Section2() {
  return (
    <div className={style.root}>
      
      <div className="title">
        <h1>Весенние новинки</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={img1} alt="img1" />
          <h1>FILA бомбер мужской</h1>
          <p>13000 р</p>
        </div>
        <div className="card">
          <img src={img2} alt="img2" />
          <h1>Дубленка унисекс</h1>
          <p>17000 р</p>
        </div>
        <div className="card">
          <img src={img3} alt="img3" />
          <h1>Женский топ AVIREXFLY</h1>
          <p>4990 р</p>
        </div>
        <div className="card">
          <img src={img4} alt="img4" />
          <h1>Олимпийка ACRONYM</h1>
          <p>5200 р</p>
        </div>
      </div>
    </div>
  )
}
export default Section2;