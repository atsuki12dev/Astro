import React from 'react';
import style from './Catalog.module.scss';

import card1 from '../../assets/img/Catalog/card1.png';
import card2 from '../../assets/img/Catalog/card2.png';
import card3 from '../../assets/img/Catalog/card3.png';
import card4 from '../../assets/img/Catalog/card4.png';
import card5 from '../../assets/img/Catalog/card5.png';
import card6 from '../../assets/img/Catalog/card6.png';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function Catalog() {
  const CardsList = [card1, card2, card3, card4, card5, card6];
  const [cards, setCards] = React.useState([]);

  // ?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}
  React.useEffect(() => {
    fetch(`https://6821b2da259dad2655b03f26.mockapi.io/card`)
    .then((response) => response.json())
      .then((arr) => {
        setCards(arr);
      })
  }, []);

  return (
    <div className={style.root}>
      <Section1 />
      <Section2 />
      <div className="cards">
        {
          cards.map((card) => 
            <Section3 key={card.id} 
              title={card.title} 
              price={card.price} 
              img={CardsList[card.id]} 
            />
          )
        }
      </div>
      <Section4 />
    </div>
  )
}
export default Catalog;