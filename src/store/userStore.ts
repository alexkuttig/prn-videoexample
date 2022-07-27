import create from 'zustand';
import {persist} from 'zustand/middleware';
import {IMovie} from '../@types/IMovie';
import {IUser} from '../@types/IUser';
import {getMovieById} from '../services/movieService';
import {AsyncStorage} from 'react-native';

type UserStoreFunctions = {
  addFav: (fav: IMovie) => void;
  addFavById: (favId: number) => void;
  removeFav: (favId: number) => void;
};
export const useUserStore = create(
  persist<IUser & UserStoreFunctions>(
    (set, get) => ({
      name: 'John',
      favs: {},
      addFav: (fav: IMovie) => {
        const _favs = {...get().favs};
        if (!_favs[fav.id]) {
          _favs[fav.id] = fav;
          set({favs: _favs});
        }
      },
      addFavById: async (favId: number) => {
        const _favs = {...get().favs};
        if (!_favs[favId]) {
          const movie = await getMovieById(favId);
          if (movie) {
            _favs[favId] = movie;
            set({favs: _favs});
          }
        }
      },
      removeFav: (favId: number) => {
        const _favs = {...get().favs};
        if (_favs[favId]) {
          delete _favs[favId];
          set({favs: _favs});
        }
      },
    }),
    {
      name: 'HYDRATE::USER',
      getStorage: () => AsyncStorage,
    },
  ),
);
