import React from 'react';
import style from './Section1.module.scss';

import { Link } from 'react-router-dom';

function Section1() {
  return (
    <div className={style.root}>
      <h1>Новая коллекция</h1>
      <div className="row">
        <Link to='/Catalog'><button>купить сейчас</button></Link>
        <div className="text">
          <p>24/25</p>
          <p>весна-лето</p>
        </div>
      </div>
    </div>
  )
}
export default Section1;