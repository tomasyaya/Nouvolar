import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../views/Home';
import User from '../views/User';

const AppNavegation = createStackNavigator({
  Home: {
    screen: Home,
  },
  User: {
    screen: User,
  },
});

export default createAppContainer(AppNavegation);
