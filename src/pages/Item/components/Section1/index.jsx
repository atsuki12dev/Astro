import React from 'react';
import style from './Section1.module.scss';

import img from '../../../../assets/img/Item/sect1-img.png';

function Section1() {
  const [size, setSize] = React.useState(0);
  const [color, setColor] = React.useState(0);

  return (
    <div className={style.root}>
      <div className="col1">
        <img src={img} alt="img" />
      </div>
      <div className="col2">
        <h1>Armarishop</h1>
        <p>Мастерка ветровка <br />дрилл y2k верхняя <br />одежда</p>
        <div className="colors">
          <p>цвет</p>
          <div>
            <div className={color === 0 ? 'active' : ''} onClick={() => setColor(0)}></div>
            <div className={color === 1 ? 'active' : ''} onClick={() => setColor(1)}></div>
            <div className={color === 2 ? 'active' : ''} onClick={() => setColor(2)}></div>
          </div>
        </div>
        <div className="sizes">
          <p>размер</p>
          <div>
            <div className={size === 0 ? 'active' : ''} onClick={() => setSize(0)}>M</div>
            <div className={size === 1 ? 'active' : ''} onClick={() => setSize(1)}>L</div>
            <div className={size === 2 ? 'active' : ''} onClick={() => setSize(2)}>XL</div>
            <div className={size === 3 ? 'active' : ''} onClick={() => setSize(3)}>XXL</div>
          </div>
        </div>
        <div className="buttons">
          <button>В корзину</button>
          <button>В избранное</button>
        </div>
      </div>
    </div>
  )
}

export default Section1;