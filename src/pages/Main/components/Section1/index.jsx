import React from 'react';
import style from './Section1.module.scss';

function Section1() {
  return (
    <div className={style.root}>
      <h1>Новая коллекция</h1>
      <div className="row">
        <button>купить сейчас</button>
        <div className="text">
          <p>24/25</p>
          <p>весна-лето</p>
        </div>
      </div>
    </div>
  )
}
export default Section1;