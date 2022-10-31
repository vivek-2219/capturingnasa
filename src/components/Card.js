import '../../src/App.css';
import React, { useState } from 'react';

const Card = (props) => {
    const [displayChanger, setDisplayChanger] = useState('none');
    const [buttonText, setButtonText] = useState('Read More ...');

    const { image, title, explanation, date } = props;

    const handleData = () => {
        if (displayChanger === 'none') {
            setDisplayChanger('flex');
            setButtonText('Close');
        }
        else {
            setDisplayChanger('none');
            setButtonText('Read More ...');
        }
    }
    return (
        <>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" style={{ height: '298px' }} alt="Image Unavailable" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{`${explanation}`.slice(0, 123)}...</p>
                    <p className="card-text" style={{ position: 'absolute', fontSize: '15px', right: '6px', bottom: '6px' }}>{date}</p>
                    <div className="btn btn-primary" onClick={handleData}>{buttonText}</div>
                </div>
            </div>

            <div className="container elementContainer justify-content-center" style={{ display: displayChanger, zIndex: 90 }}>
                <div className="card m-3" style={{ width: '28rem' }}>
                    <img src={image} className="card-img-top" style={{ height: '298px' }} alt="Image Unavailable" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{explanation}</p>
                        <p className="card-text" style={{ position: 'absolute', fontSize: '15px', right: '6px', bottom: '6px' }}>{date}</p>
                        <div className="btn btn-primary" onClick={handleData}>{buttonText}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
