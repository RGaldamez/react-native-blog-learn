import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './src/context/BlogContext';
import BlogScreen from './src/screens/BlogScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
const navigator = createStackNavigator(
  {
    Blogs: BlogScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },

  {
    initialRouteName: 'Blogs',
    defaultNavigationOptions: {
      title: 'My Blogs',
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
