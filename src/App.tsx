import React, {useState} from 'react';
import {IGenre} from './@types/IGenre';
import {IMovie} from './@types/IMovie';
import Genre from './views/genre/Genre';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';

const PAGES = {
  HOME: 0,
  GENRE: 1,
  MOVIE: 2,
};

const App = () => {
  const [page, setPage] = useState<number>(PAGES.HOME);
  const [genre, setGenre] = useState<IGenre | undefined>(undefined);
  const [movie, setMovie] = useState<IMovie | undefined>(undefined);

  const chooseGenre = (lGenre: IGenre) => {
    setGenre(lGenre);
    setPage(PAGES.GENRE);
  };

  const chooseMovie = (lMovie: IMovie) => {
    setMovie(lMovie);
    setPage(PAGES.MOVIE);
  };

  const backToGenres = () => {
    setMovie(undefined);
    setPage(PAGES.GENRE);
  };

  const backToHome = () => {
    setMovie(undefined);
    setGenre(undefined);
    setPage(PAGES.HOME);
  };

  switch (page) {
    case PAGES.HOME:
      return <Home chooseGenre={chooseGenre} />;
    case PAGES.GENRE:
      return (
        <Genre
          backToHome={backToHome}
          genre={genre}
          chooseMovie={chooseMovie}
        />
      );
    case PAGES.MOVIE:
      return <Movie backToGenres={backToGenres} movie={movie} />;
  }
};

export default App;
