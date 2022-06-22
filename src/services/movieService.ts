import {IGenre} from '../@types/IGenre';
import {IMovie} from '../@types/IMovie';

const genres: IGenre[] = require('../../assets/data/genres.json');
const movies: IMovie[] = require('../../assets/data/movies.json');

const getGenres = (): Array<IGenre> => {
  return genres;
};

const getMovies = (): Array<IMovie> => {
  return movies;
};

const getMovieByGenreId = (genreId: number): Array<IMovie> => {
  return movies.filter(movie => movie.genre_ids.indexOf(genreId) > -1);
};

const getMovieById = (movieId: number): IMovie | undefined => {
  return movies.find(movie => movie.id === movieId);
};

export {getGenres, getMovies, getMovieByGenreId, getMovieById};
