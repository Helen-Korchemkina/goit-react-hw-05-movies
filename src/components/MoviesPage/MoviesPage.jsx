import { useState } from 'react';
import api from '../../services/api';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [changeFilm, setChangeFilm] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setChangeFilm(event.target.value.toLowerCase());
  };

  const onSearchMovie = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const searchMovie = await api.fetchSearchByKeyword(changeFilm);
      setSearchFilms(searchMovie);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <form onSubmit={onSearchMovie}>
        <input type="text" autoFocus onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {loading && <Loader />}
        {searchFilms.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default MoviesPage;
