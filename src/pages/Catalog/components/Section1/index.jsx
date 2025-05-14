import React from 'react';
import style from './Section1.module.scss';

import img1 from '../../../../assets/img/Catalog/sect1-img1.png';
import img2 from '../../../../assets/img/Catalog/sect1-img2.png';

function Section1() {
  return (
    <div className={style.root}>
      <img src={img1} alt="img1" />
      <img src={img2} alt="img2" />
    </div>
  )
}

export default Section1;