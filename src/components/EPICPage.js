import React, { useContext } from 'react'
import EPICContext from '../context/envelope/epicContext';
import Spinner from './Spinner';

const EPICPage = () => {
    const context = useContext(EPICContext);
    const { epicLoading, imageUrl } = context;

    return (
        <>
            <div className="container" style={{ display: epicLoading }}>
                <Spinner />
            </div>
            <div className="container px-4" style={{ zIndex: -1 }}>
                <div className="container"><h2 className='m-3'>Earth Polychromatic Imging Camera</h2></div>
                <img src={imageUrl} className="card-img-top" alt="Image Unavailable" />
            </div>
        </>
    )
}

export default EPICPage
