import {IGenre} from '../@types/IGenre';
import {IMovie} from '../@types/IMovie';
import {APIConstants} from '../constants/APIConstants';

const createFullAPIPath: (path: string) => string = path => {
  return (
    APIConstants.API_URL +
    path +
    (path.includes('?') ? '&' : '?') +
    'api_key=' +
    APIConstants.API_KEY
  );
};

async function makeAPICall<T>(path: string): Promise<T> {
  console.log(createFullAPIPath(path));
  const response = await fetch(createFullAPIPath(path));
  return response.json() as Promise<T>;
}

const getGenres = async (): Promise<Array<IGenre>> => {
  let data: Array<IGenre> = [];
  try {
    const apiResponse = await makeAPICall<{genres: Array<IGenre>}>(
      'genre/movie/list',
    );
    data = apiResponse.genres;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  return data;
};

const getMovieByGenreId = async (genreId: number): Promise<Array<IMovie>> => {
  let data: Array<IMovie> = [];
  try {
    const apiResponse = await makeAPICall<{
      page: number;
      results: Array<IMovie>;
    }>('discover/movie?with_genres=' + genreId);
    data = apiResponse.results;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
  return data;
};

const getMovieById = async (movieId: number): Promise<IMovie | undefined> => {
  try {
    const apiResponse = await makeAPICall<IMovie | undefined>(
      'movie/' + movieId,
    );
    console.log(apiResponse);
    return apiResponse;
  } catch (e) {
    console.log(e);
  }
};

export {getGenres, getMovieByGenreId, getMovieById};
