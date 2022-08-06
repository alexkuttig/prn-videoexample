import React from 'react';
import Genre from './views/genre/Genre';
import Home from './views/home';
import Movie from './views/movie/Movie';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {MainStackParamList, UserStackParamList} from './@types/Stacks';
import {ColorConstants, FontConstants} from 'prn-video-example-styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import User from './views/user/User';

const TabNavigator = createBottomTabNavigator();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();

const MovieTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: ColorConstants.background,
    card: ColorConstants.background,
  },
};

const MainStackScreen = () => {
  return (
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
  );
};

const UserStackScreen = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorConstants.background,
        },
        headerTintColor: ColorConstants.font,
        headerTitleStyle: {
          fontWeight: FontConstants.weightBold,
        },
      }}>
      <UserStack.Screen
        name="User"
        component={User}
        options={{title: 'Favorite Movies'}}
      />
      <UserStack.Screen
        name="Movie"
        component={Movie}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </UserStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={MovieTheme}>
      <TabNavigator.Navigator
        screenOptions={{
          tabBarInactiveBackgroundColor: ColorConstants.background,
          tabBarActiveBackgroundColor: ColorConstants.background,
          tabBarInactiveTintColor: ColorConstants.font,
        }}>
        <TabNavigator.Screen
          name="MainTab"
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <TabNavigator.Screen
          name="UserTab"
          component={UserStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
