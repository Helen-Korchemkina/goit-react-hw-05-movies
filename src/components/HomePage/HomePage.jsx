import { Link } from 'react-router-dom';

const HomePage = ({ films }) => {
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
