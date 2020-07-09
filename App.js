import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/context/BlogContext';
import BlogScreen from './src/screens/BlogScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
const navigator = createStackNavigator(
  {
    Blogs: BlogScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },

  {
    initialRouteName: 'Blogs',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  },
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
