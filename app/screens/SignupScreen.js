import React from 'react';

import {Button, Text, View} from 'react-native';

function SignupScreen({navigation}) {
  return (
    <View>
      <Text>Sign up Screen</Text>
      <Text>Can be user or merchant up</Text>
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
}

export default SignupScreen;
