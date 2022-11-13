import { useEffect, useState } from "react";
import AsteroidContext from "./asteroidContext";

const AsteroidState = (props) => {
    // Getting the API key from environment variables.
    const API_KEY = process.env.REACT_APP_NASA_KEY;

    const [asteroidLoading, setAsteroidLoading] = useState('block');
    const [asteroidData, setAsteroidData] = useState('');

    // Variables to configure date object in JS.
    let d = new Date();
    let date = new Date();
    let m = 0;
    let monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let inputMonth = 0;
    let inputYear = 0;

    const fetchNeoWs = async () => {
        // Logic for changing the months according to the leap year or general year.
        if (date.getFullYear() % 4 === 0) {
            monthsArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        else {
            monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        };

        // Logic for going 7 days next.
        if (d.getDate() + 7 > monthsArr[m - 1]) {
            if (d.getFullYear === 11) {
                inputYear = d.getFullYear() + 1;
            }
            else {
                inputYear = d.getFullYear();
            };

            inputMonth = (d.getMonth() + 1) % 12;
            m = monthsArr[d.getMonth() % 12];
            d = d.getDate() + 7 - m;
        }
        else {
            d = d.getDate() + 7;
            inputMonth = date.getMonth();
            inputYear = date.getFullYear();
        };

        setAsteroidLoading('block'); // Showing the loading circle when content is loading.

        // Main logic starts here.
        // Fetching data using the API.
        const neoWsResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&end_date=${inputYear}-${inputMonth + 1}-${d}`);
        try {
            setAsteroidLoading('none'); // Hiding the loading circle when the content loading is completed.
            const response = await neoWsResponse.json();
            const dataArr = [];
            for (let j = 0; j < Object.values(Object.values(response.near_earth_objects)).length; j++) {
                for (let i = 0; i < Object.values(Object.values(response.near_earth_objects))[j].length; i++) {
                    const data = [Object.values(Object.values(response.near_earth_objects))[j][i].name, Object.values(Object.values(response.near_earth_objects))[j][i].estimated_diameter.meters.estimated_diameter_min, Object.values(Object.values(response.near_earth_objects))[j][i].estimated_diameter.meters.estimated_diameter_max, Object.values(Object.values(response.near_earth_objects))[j][i].close_approach_data[0].close_approach_date_full, Object.values(Object.values(response.near_earth_objects))[j][i].close_approach_data[0].relative_velocity.kilometers_per_second, Object.values(Object.values(response.near_earth_objects))[j][i].close_approach_data[0].miss_distance.kilometers, Object.values(Object.values(response.near_earth_objects))[j][i].is_potentially_hazardous_asteroid, Object.values(Object.values(response.near_earth_objects))[j][i].close_approach_data[0].orbiting_body];
                    dataArr.push(data);
                };
            };
            setAsteroidData(dataArr);
        }

        catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        return () => {
            fetchNeoWs();
        };
    }, []);

    return (
        <AsteroidContext.Provider value={{ asteroidData, asteroidLoading }}>
            {props.children}
        </AsteroidContext.Provider>
    )
}

export default AsteroidState;
