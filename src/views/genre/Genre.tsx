import React, {useState, useEffect} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {IGenre} from '../../@types/IGenre';
import {IMovie} from '../../@types/IMovie';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';
import ScrollContainer from '../../containers/ScrollContainer';
import {getMovieByGenreId} from '../../services/movieService';

interface GenreProps {
  genre: IGenre | undefined;
  backToHome: () => void;
  chooseMovie: (movie: IMovie) => void;
}

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (typeof props.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.genre.id));
    }
  }, [props.genre]);

  return (
    <ScrollContainer>
      <BackButton onPress={props.backToHome} text="Back to home" />
      <Header text="Movies" />
      {movies.map(movie => {
        return (
          <Pressable onPress={() => props.chooseMovie(movie)}>
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
