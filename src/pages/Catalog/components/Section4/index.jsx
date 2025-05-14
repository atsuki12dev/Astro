import React from 'react';
import style from './Section4.module.scss';

import banner from '../../../../assets/img/Catalog/banner.png';

function Section4() {
  return (
    <div className={style.root}>
      <h1>Бестселлеры</h1>
      <img src={banner} alt="banner" />
    </div>
  )
}

export default Section4;