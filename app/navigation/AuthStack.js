import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const AuthStack = createStackNavigator(
  {
    'auth.login': {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
    'auth.signup': {
      screen: SignupScreen,
      navigationOptions: {
        title: 'Create Account',
      },
    },
  },
  {
    initialRouteName: 'auth.login',
  },
);

export default AuthStack;
