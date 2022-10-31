import React, { useState, useEffect } from 'react';
import CardContext from './cardContext';

const CardState = (props) => {
    const [apodLoading, setApodLoading] = useState('block');
    const [cardData, setCardData] = useState('');
    let d = new Date();

    const fetchApodData = async () => {
        setApodLoading('block');
        const apodResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=VovcfG0JJR8fgeAWu5b8KMj18cRIB0VGFOjMG2Tb&start_date=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 7}`);
        const dataArr = [];
        try {
            setApodLoading('none');
            const response = await apodResponse.json();
            for (let i = 0; i < response.length; i++) {
                const data = [response[i].date, response[i].title, response[i].url, response[i].explanation];
                dataArr.push(data);
            }
            setCardData(dataArr);
        }

        catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        return () => {
            fetchApodData();
        };
    }, []);

    return (
        <CardContext.Provider value={{ cardData, apodLoading }}>
            {props.children}
        </CardContext.Provider>
    );
};

export default CardState;

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-20&end_date=2022-10-22&api_key=VovcfG0JJR8fgeAWu5b8KMj18cRIB0VGFOjMG2Tb