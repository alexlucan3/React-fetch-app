import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Just look how beautifull they are !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dog1.jpg'
              text='Adopt this doggo now ! '
              label='Labrador'
              path='/adopt'
            />
            <CardItem
              src='images/dog2.jpg'
              text='Adopt this doggo now !'
              label='Labrador'
              path='/adopt'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dog3.png'
              text='Adopt this doggo now !'
              label='Husky'
              path='/adopt'
            />
            <CardItem
              src='images/dog4.jpg'
              text='Adopt this doggo now !'
              label='Beagle'
              path='/adopt'
            />
            <CardItem
              src='images/dog5.jpg'
              text='Adopt this doggo now !'
              label='Boxer'
              path='/adopt'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
