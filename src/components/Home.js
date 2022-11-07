import React from 'react';
import ApodPage from './ApodPage';
import NeoWsPage from './NeoWsPage';

const Home = () => {

  return (
    <>
      <div className="container">
        <div className="container"><h2 className='m-3'>Astronomy Pictures of the day</h2></div>
      </div>
      <ApodPage />
      <div className="container">
        <div className="container"><h2 className='m-3'>Asteroids - NeoWs</h2></div>
      </div>

      <NeoWsPage />
    </>
  )
}

export default Home
