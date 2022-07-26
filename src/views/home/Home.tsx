import React, {useState, useEffect} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {IGenre} from '../../@types/IGenre';
import {getGenres} from '../../services/movieService';
import ScrollContainer from '../../containers/ScrollContainer';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {MainStackParamList} from '../../@types/Stacks';
import {useUserStore} from '../../store/userStore';

type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const name = useUserStore(state => state.name);

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  console.log('rerender home');
  return (
    <ScrollContainer>
      <Text style={styles.welcome}>Hello {name}</Text>
      {genres.map(genre => {
        return (
          <Pressable
            key={genre.name}
            onPress={() => props.navigation.navigate('Genre', {genre: genre})}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  welcome: {
    color: ColorConstants.font,
    fontSize: FontConstants.sizeTitle,
    fontWeight: FontConstants.weightBold,
    marginBottom: SizeConstants.paddingRegular,
  },
  genreTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export default Home;
