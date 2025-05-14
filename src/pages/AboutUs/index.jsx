import React from 'react';
import style from './AboutUs.module.scss';

import img1 from '../../assets/img/AboutUs/img1.png';
import img2 from '../../assets/img/AboutUs/img2.png';

function AboutUs() {
  return (
    <div className={style.root}>
      <div className="history">
        <h1>О нас</h1>
        <div className="row1">
          <img src={img1} />
          <div className="text">
            <h1>Бренд</h1>
            <p>Astro — это интернет-магазин одежды, основанный в начале 2020-х годов, который предлагает стильные и доступные коллекции. Он ориентирован на молодежную аудиторию, уделяя внимание качеству, устойчивости и индивидуальности. </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="row2">
          <div className="text">
            <h1>История</h1>
            <p>Astro был основан в начале 2010-х годов группой энтузиастов моды, которые заметили недостаток качественной и стильной одежды по доступным ценам. Вдохновляясь уличной культурой и современными тенденциями, Astro быстро стал любимым выбором для тех, кто ищет что-то особенное.</p>
          </div>
          <img src={img2} />
        </div>
      </div>
      <div className="advantages">
        <h1>Преимущества ASTRO</h1>
        <div className="row1">
          <div className="card">
            <h1>Помощь в выборе размера</h1>
            <p>Для каждого товара вы можете найти рекомендацию от продавца</p>
          </div>
          <div className="card">
            <h1>Популярные бренды</h1>
            <p>Любимые и проверенные бренды</p>
          </div>
        </div>
        <div className="row2">
          <div className="card">
            <h1>15 лет на рынке</h1>
            <p>Наши розничные магазины работают уже более 10 лет</p>
          </div>
          <div className="card">
            <h1>Программа лояльности</h1>
            <p>Скидки с каждой покупкой и закрытие распродажи для участников программы лояльности</p>
          </div>
          <div className="card">
            <h1>Гарантия качества</h1>
            <p>В случае брака, мы быстро оформим возврат и дадим скидку на следующую покупку</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;