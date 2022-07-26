import {IMovie} from './IMovie';

export type IUser = {
  name: string;
  favs: {[favId: number]: IMovie};
};
