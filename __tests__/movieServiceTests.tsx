import {getMovies, getMovieById} from '../src/services/movieService';

describe('testing getMovies API', () => {
  test('getMovies returns values', () => {
    expect(getMovies()).toBeTruthy();
  });
  test('getMovies returns an array', () => {
    expect(getMovies()).toBeInstanceOf(Array);
  });
  test('getMovies returns three results', () => {
    expect(getMovies()).toHaveLength(46);
  });
});

describe('testing getMovieById API', () => {
  test('getMovies returns movie if id exists', () => {
    expect(getMovieById(892153)).toBeTruthy();
  });
  test('getMovies returns movie with correct title and release date', () => {
    const movie = getMovieById(892153);
    expect(movie?.title).toBe('Tom and Jerry Cowboy Up!');
    expect(movie?.release_date).toBe('2022-01-24');
  });
  test('getMovies returns nothing if id does not exist', () => {
    expect(getMovieById(0)).toBeFalsy();
  });
});
