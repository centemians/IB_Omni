import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

import {capitalizeFirstLetter} from '../helpers/string';

const AppStack = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
      },
    },
    Details: {
      screen: Details,
      navigationOptions: ({navigation}) => ({
        title: `${capitalizeFirstLetter(
          navigation.state.params.name.first,
        )} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
      }),
    },
  },
  {
    initialRouteName: 'Contacts',
  },
);

export default createAppContainer(AppStack);

