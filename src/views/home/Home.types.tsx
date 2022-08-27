import {IGenre} from '../../@types/IGenre';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {MainStackParamList} from '../../@types/Stacks';

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

export type HomeViewProps = {
  genres: IGenre[];
  name: string;
  onGenrePress: (genre: IGenre) => void;
};
