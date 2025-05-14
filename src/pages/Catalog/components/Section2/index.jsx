import React from 'react';
import style from './Section2.module.scss';

function Section2() {
  const [Sort, setSort] = React.useState(0);

  return (
    <div className={style.root}>
      <div className="sort">
        <h1>Сортировка по:</h1>
        <div className="btns">
          <button className={Sort === 0 ? 'active' : ''} onClick={() => setSort(0)}>Размер</button>
          <button className={Sort === 1 ? 'active' : ''} onClick={() => setSort(1)}>Цвет</button>
          <button className={Sort === 2 ? 'active' : ''} onClick={() => setSort(2)}>Цена</button>
          <button className={Sort === 3 ? 'active' : ''} onClick={() => setSort(3)}>Стиль</button>
        </div>
      </div>
    </div>
  )
}

export default Section2;