import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'green',
  },
  button: {
    // flex: 1,
    padding: 10,
  },
});

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.text}>Can be user or merchant login</Text>
      <View style={styles.button}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('auth.signup')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('user.stores')}
        />
      </View>
    </View>
  );
}

export default LoginScreen;
