import React, { useState, useEffect } from 'react';
import CardContext from './cardContext';

const CardState = (props) => {
    const API_KEY = process.env.REACT_APP_NASA_KEY;
    const [apodLoading, setApodLoading] = useState('block');
    const [cardData, setCardData] = useState('');

    let d = new Date();
    let date = new Date();
    let m = 0;
    let monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const fetchApodData = async () => {
        if (date.getFullYear() % 4 === 0) {
            monthsArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        else {
            monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        };

        if (d.getDate() < 7) {
            m = monthsArr[(d.getMonth() + 10) % 12];
            d = m + (d.getDate() - 7) + 1;
            console.log(d, m);
        }
        else {
            d = d.getDate();
        }
        setApodLoading('block');
        const apodResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${date.getFullYear()}-${date.getMonth()}-${d}`);
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
            apodResponse = 'Failed to fetch';
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
