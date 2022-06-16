import React, { useEffect, useState } from "react";
import api from '../../services/api';

const HomePage = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const FetchTrendingFilms = async () => {
            try {
                const trendingFilms = await api.fetchTrending();
                console.log(trendingFilms);
                setFilms(trendingFilms);
            } catch (error) {
                console.log(error);
            }
        }
        FetchTrendingFilms();
}, [])
    return (
        <main>
    <h1>Trending today</h1>
    <ul>
                {films.map(film => <li key={film.id}>{film.overview}</li>)}
            </ul>
            </main>
    );
}

export default HomePage;