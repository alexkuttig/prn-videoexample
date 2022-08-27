import React, {useState, useEffect} from 'react';
import {IGenre} from '../../@types/IGenre';
import {getGenres} from '../../services/movieService';
import {useUserStore} from '../../store/userStore';
import HomeView from './Home.view';
import {HomeProps} from './Home.types';

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const name = useUserStore(state => state.name);

  useEffect(() => {
    const fetchData = async () => {
      setGenres(await getGenres());
    };
    fetchData();
  }, []);

  return (
    <HomeView
      genres={genres}
      name={name}
      onGenrePress={(genre: IGenre) =>
        props.navigation.navigate('Genre', {genre: genre})
      }
    />
  );
};

export default Home;
