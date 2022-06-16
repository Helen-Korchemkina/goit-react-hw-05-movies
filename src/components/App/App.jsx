import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import MoviesPage from '../MoviesPage/MoviesPage';
import s from './App.module.css';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          {/* <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

// 1 '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// 2 '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// 3 '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// 4 /movies/:movieId/cast - компонент <Cast>, информация о актерском составе.
// ----- Рендерится на странице < MovieDetailsPage >.
// 5 /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах.
// ----- Рендерится на странице < MovieDetailsPage >.
