import React, { useContext, useState, useEffect } from 'react';
import cardContext from '../context/envelope/cardContext';
import Card from './Card';
import NeoWsPage from './NeoWsPage';
import Spinner from './Spinner';

const Home = () => {
  const context = useContext(cardContext);
  const { cardData, apodLoading } = context;

  return (
    <>
      <div className="container">
        <div className="container"><h2 className='m-3'>Astronomy Pictures of the day</h2></div>
      </div>
      <div className="container" style={{ display: apodLoading }}>
        <Spinner />
      </div>
      <div className="container apodContainer d-flex justify-content-center flex-wrap">
        {Array.from(cardData).reverse().slice(0, 4).map((element, cardId) => {
          return <Card key={cardId} date={element[0]} title={element[1]} image={element[2]} explanation={element[3]} />
        })}
      </div>
      <div className="container">
        <div className="container"><h2 className='m-3'>Asteroids - NeoWs</h2></div>
      </div>

      <NeoWsPage />
    </>
  )
}

export default Home
