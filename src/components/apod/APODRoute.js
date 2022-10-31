import React, { useContext } from 'react'
import cardContext from '../../context/envelope/cardContext';
import Card from '../Card';
import Spinner from '../Spinner';

const APODRoute = () => {
    const context = useContext(cardContext);
    const { cardData, apodLoading } = context;
    return (
        <>
            <div className="container"><h2 className='m-3'>Astronomy Pictures of the day</h2></div>
            <div className="container mb-4" style={{ display: apodLoading }}>
                <Spinner />
            </div>
            <div className="container d-flex justify-content-center flex-wrap">
                {Array.from(cardData).reverse().map((element, cardId) => {
                    return <Card key={cardId} date={element[0]} title={element[1]} image={element[2]} explanation={element[3]} />
                })}
            </div>
        </>
    )
}

export default APODRoute
