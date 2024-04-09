import { useState , useEffect } from "react";
import Movies from "../Components/Movies";
import Banner from "../Components/Banner";

function Main() {
    const [top10, setTop10] =useState([]);

    useEffect(() => {
        async function fetchTop10() {
            const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3f2d694a74msh55a8d324f3472aap12deeejsndbb79ba65c93',
                    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setTop10(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTop10();

    }, []);

    
    console.log(top10);

    return ( <>
       <Banner />
       <Movies movies ={ top10 }/>
    </> );
}

export default Main;