import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from 'prn-video-example-styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParamList} from '../../@types/Stacks';
import ScrollContainer from '../../containers/ScrollContainer';
import {useUserStore} from '../../store/userStore';

type UserProps = NativeStackScreenProps<UserStackParamList, 'User'>;

const User = (props: UserProps) => {
  const favs = useUserStore(state => state.favs);
  return (
    <ScrollContainer>
      {Object.values(favs).map(movie => {
        return (
          <Pressable
            key={movie.id}
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

export default User;
