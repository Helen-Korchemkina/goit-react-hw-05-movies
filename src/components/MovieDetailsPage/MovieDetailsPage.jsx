import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import api from '../../services/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const onDetalisMovie = async () => {
      try {
        const detalyMovie = await api.fetchMovieDetalis(movieId);
        setMovieInfo(detalyMovie);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    onDetalisMovie();
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <div className={s.movieDetalis}>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={s.genreList}>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
