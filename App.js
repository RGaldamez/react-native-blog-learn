import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BlogScreen from './src/screens/BlogScreen';
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

export default createAppContainer(navigator);
