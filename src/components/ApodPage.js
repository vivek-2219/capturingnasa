import React, {useContext} from 'react';
import cardContext from '../context/envelope/cardContext';
import Card from './Card';
import Spinner from './Spinner';

const ApodPage = (props) => {
    const context = useContext(cardContext);
    const { cardData, apodLoading } = context;
    return (
        <>
            <div className="container" style={{ display: apodLoading }}>
                <Spinner />
            </div>
            <div className="container apodContainer d-flex justify-content-center flex-wrap">
                {Array.from(cardData).reverse().slice(0, 4).map((element, cardId) => {
                    return <Card key={cardId} date={element[0]} title={element[1]} image={element[2]} explanation={element[3]} />
                })}
            </div>
        </>
    )
}

export default ApodPage
