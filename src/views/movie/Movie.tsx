import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MainStackParamList} from '../../@types/Stacks';
import {FontConstants, ColorConstants} from '../../constants/StyleConstants';
import ScrollContainer from '../../containers/ScrollContainer';

type MovieProps = NativeStackScreenProps<MainStackParamList, 'Movie'>;

const Movie = (props: MovieProps) => {
  return (
    <ScrollContainer>
      {props.route.params.movie ? (
        <View>
          <Text style={styles.overview}>
            {props.route.params.movie.overview}
          </Text>
        </View>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  overview: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
});

export default Movie;
