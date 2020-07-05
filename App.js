import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BlogScreen from './src/screens/BlogScreen';
import {BlogProvider} from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Blogs: BlogScreen,
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
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
