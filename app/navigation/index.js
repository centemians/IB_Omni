import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer} from 'react-navigation';
import {Transition} from 'react-native-reanimated';

import AuthStack from './AuthStack';
import UserStack from './UserStack';
import MerchantStack from './MerchantStack';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    auth: AuthStack,
    user: UserStack,
    merchant: MerchantStack,
  },
  {
    initialRouteName: 'auth',
    backBehavior: 'none',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(AppNavigator);
