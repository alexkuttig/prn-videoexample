import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {IMovie} from '../../@types/IMovie';
import {MainStackParamList} from '../../@types/MainStack';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
import ScrollContainer from '../../containers/ScrollContainer';
import {getMovieByGenreId} from '../../services/movieService';

type GenreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (typeof props.route.params.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.route.params.genre.id));
    }
  }, [props.route.params.genre]);

  return (
    <ScrollContainer>
      {movies.map(movie => {
        return (
          <Pressable
            onPress={() => props.navigation.navigate('Movie', {movie: movie})}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});

export default Genre;
