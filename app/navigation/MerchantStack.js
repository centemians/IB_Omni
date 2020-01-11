import {createStackNavigator} from 'react-navigation-stack';

import MerchantScreen from '../screens/MerchantScreen';

const MerchantStack = createStackNavigator(
  {
    'merchant.main': {
      screen: MerchantScreen,
      navigationOptions: {
        title: 'My Store',
      },
    },
  },
  {
    initialRouteName: 'merchant.main',
  },
);

export default MerchantStack;
