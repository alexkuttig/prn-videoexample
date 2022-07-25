import React, {useState} from 'react';
import {IMovie} from '../@types/IMovie';
import {getMovieById} from '../services/movieService';

type IUserProvider = {
  name: string;
  setName: (name: string) => void;
  favs: {[favId: number]: IMovie};
  addFav: (fav: IMovie) => void;
  removeFav: (favId: number) => void;
};

const UserContext = React.createContext<IUserProvider | null>(null);

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error(
      'useUser must be used inside a UserProvider, which has been initialized',
    );
  }

  const {name, setName, favs, addFav, removeFav} = context;

  const addFavById = (favId: number): void => {
    const movie = getMovieById(favId);
    if (!movie) {
      return;
    }
    addFav(movie);
  };

  const getFavsAsArray = (): IMovie[] => {
    return Object.values(favs);
  };

  const isFav = (favId: number): boolean => {
    return !!favs[favId];
  };

  return {
    name,
    setName,
    favs,
    getFavsAsArray,
    removeFav,
    addFavById,
    isFav,
  };
}

export function UserProvider(props: any) {
  const [name, setName] = useState<string>('John');
  const [favs, setFavs] = useState<{[favId: number]: IMovie}>({});

  const addFav = (fav: IMovie): void => {
    if (!favs[fav.id]) {
      const _favs = {...favs};
      _favs[fav.id] = fav;
      setFavs(_favs);
    }
  };

  const removeFav = (favId: number): void => {
    if (favs[favId]) {
      const _favs = {...favs};
      delete _favs[favId];
      setFavs(_favs);
    }
  };

  const value = {
    name,
    setName,
    favs,
    addFav,
    removeFav,
  };

  return <UserContext.Provider value={value} {...props} />;
}
