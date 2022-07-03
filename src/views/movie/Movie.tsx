import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {IMovie} from '../../@types/IMovie';
import Header from '../../components/Header';
import ScrollContainer from '../../containers/ScrollContainer';

interface MovieProps {
  movie: IMovie | undefined;
  backToGenres: () => void;
}

const Movie = (props: MovieProps) => {
  return (
    <ScrollContainer>
      <Pressable onPress={props.backToGenres} style={styles.backButton}>
        <Text>Back to genre</Text>
      </Pressable>
      {props.movie ? (
        <View>
          <Header text={props.movie.title} />
          <Text style={styles.overview}>{props.movie.overview}</Text>
        </View>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#dddddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  overview: {
    fontSize: 14,
  },
});

export default Movie;
