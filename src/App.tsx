import React from 'react';
import Genre from './views/genre/Genre';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {MainStackParamList} from './@types/MainStack';
import {ColorConstants, FontConstants} from './constants/StyleConstants';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ColorConstants.background,
          },
          headerTintColor: ColorConstants.font,
          headerTitleStyle: {
            fontWeight: FontConstants.weightBold,
          },
        }}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Movie Genres'}}
        />
        <MainStack.Screen
          name="Genre"
          component={Genre}
          options={{title: 'Movies'}}
        />
        <MainStack.Screen
          name="Movie"
          component={Movie}
          options={({route}) => ({title: route.params.movie.title})}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
