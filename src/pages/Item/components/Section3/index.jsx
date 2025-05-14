import React from 'react';
import style from './Section3.module.scss';

import img from '../../../../assets/img/Item/sect3-img.png';

function Section3() {
  return (
    <div className={style.root}>
      <h1>Товары бренда Armarishop</h1>
      <img src={img} />
    </div>
  )
}

export default Section3;