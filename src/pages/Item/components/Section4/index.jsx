import React from 'react';
import style from './Section4.module.scss';

import stars from '../../../../assets/img/Item/sect4-img.png';

function Section4() {
  return (
    <div className={style.root}>
      <h1>Отзывы</h1>
      <div className="row">
        <div className="cards">
          <div className="card">
            <div className="title">
              <h1>Анастасия</h1>
              <p>10.12.24</p>
            </div>
            <img src={stars} alt="stars" />
            <p>Достоинства: Хорошая по качеству, размер сел хорошо</p>
            <p>Недостатки: Нет</p>
          </div>
          <div className="card">
            <div className="title">
              <h1>Егор</h1>
              <p>29.12.24</p>
            </div>
            <img src={stars} alt="stars" />
            <p>Достоинства: Удобная, практичная</p>
            <p>Недостатки: Цвет отличается, чем на фото</p>
          </div>
        </div>
        <div className="result">
          <div className="title">
            <img src={stars} alt="stars" />
            <p>49,5</p>
          </div>
          <h1>Соответствует размеру</h1>
          <p>Маломерит: 21%</p>
          <p>Соответствует: 69%</p>
          <p>Большемерит: 10%</p>
        </div>
      </div>
      <button>Показать все</button>
    </div>
  )
}

export default Section4;