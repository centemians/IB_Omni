import {createStackNavigator} from 'react-navigation-stack';

import StoresScreen from '../screens/StoresScreen';
import StoreScreen from '../screens/StoreScreen';
import ProfileScreen from '../screens/ProfileScreen';

const UserStack = createStackNavigator(
  {
    'user.stores': {
      screen: StoresScreen,
      navigationOptions: {
        title: 'Nearby Stores',
      },
    },
    'user.store': {
      screen: StoreScreen,
      navigationOptions: {
        title: 'Store Name Here',
      },
    },
    'user.profile': {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'My Profile',
      },
    },
  },
  {
    initialRouteName: 'user.stores',
  },
);

export default UserStack;
