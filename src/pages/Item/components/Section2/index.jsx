import React from 'react';
import style from './Section2.module.scss';

function Section2() {
  return (
    <div className={style.root}>
      <div className="menu">
        <div>О товаре</div>
        <div>Рекомендации от продавца</div>
        <div>Доставка</div>
        <div>Наличие</div>
      </div>
      <p>Отличный выбор! Обратите внимание, что эта куртка маломерит. Рекомендую взять на один два размера больше. Если у вас трудности с выбором, вы можете позвонить нам по номеру 89373349076 <br />Я с радостью помогу и отвечу на ваши вопросы!</p>
    </div>
  )
}

export default Section2;