import { useEffect } from "react";
import { useState } from "react";
import EPICContext from "./epicContext";

const EPICState = (props) => {
    // Getting the API key from environment variables.
    const API_KEY = process.env.REACT_APP_NASA_KEY;
    
    const [epicLoading, setEpicLoading] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    
    // Main logic starts here.
    // Function to fetch response.
    const fetchEPIC = async () => {
        setEpicLoading('block'); // Showing the loading circle when content is loading.
        const EPICResponse = await fetch(`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=${API_KEY}`);
        try {
            setEpicLoading('none'); // Hiding the loading circle when content loading is completed.
            const data = EPICResponse.url;
            setImageUrl(data);
        }
        catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        return () => {
            fetchEPIC();
        };
    }, []);

    return (
        <EPICContext.Provider value={{ epicLoading, imageUrl }}>
            {props.children}
        </EPICContext.Provider>
    );
};

export default EPICState;

