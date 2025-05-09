import React from 'react';
import style from './Section3.module.scss';

import img1 from '../../../../assets/img/Main/Sect3-img1.png';
import img2 from '../../../../assets/img/Main/Sect3-img2.png';

function Section3() {
  return (
    <div className={style.root}>
      <div className="col1">
        <img src={img1} alt="img1" />
      </div>
      <div className="col2">
        <h1>Брендовые <br />коллекции</h1>
        <p>Это не просто одежда. <br />это отражение <br />уникального стиля и <br />философии каждого <br />бренда</p>
        <img src={img2} alt="img2" />
      </div>
    </div>
  )
}
export default Section3;