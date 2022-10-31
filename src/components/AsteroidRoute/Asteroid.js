import React, { useContext } from 'react'
import asteroidContext from '../../context/envelope/asteroidContext';
import AsteroidCard from '../AsteroidCard';
import Spinner from '../Spinner';

const Asteroid = () => {
  const context = useContext(asteroidContext);
  const { asteroidData, asteroidLoading } = context;
  return (
    <>
      <div className="container">
        <div className="container"><h2 className='my-3'>Asteroids - NeoWs</h2></div>
      </div>
      <div className="container mb-4" style={{ display: asteroidLoading }}>
        <Spinner />
      </div>
      <div className="container d-flex flex-wrap">
        {Array.from(asteroidData).map((element, asteroidId) => {
          return <AsteroidCard key={asteroidId} asteroidName={element[0]} minDia={element[1]} maxDia={element[2]} closestApproach={element[3]} relativeVelocity={element[4]} missDistance={element[5]} hazardous={element[6]} orbitingBody={element[7]} />
        })}
      </div>
    </>
  )
}

export default Asteroid
