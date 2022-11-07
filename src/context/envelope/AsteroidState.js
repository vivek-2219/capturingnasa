import { useEffect, useState } from "react";
import AsteroidContext from "./asteroidContext";

const AsteroidState = (props) => {
    const API_KEY = process.env.REACT_APP_NASA_KEY;
    
    const [asteroidLoading, setAsteroidLoading] = useState('block');
    const [asteroidData, setAsteroidData] = useState('');
    
    let d = new Date();
    let date = new Date();
    let m = 0;
    const monthsObj = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const fetchNeoWs = async () => {
        setAsteroidLoading('block');
        const neoWsResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}&end_date=${d.getFullYear()}-${d.getMonth()+1}-${d.getDate() + 7}`);
        try {
            setAsteroidLoading('none');
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
