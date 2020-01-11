import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {apiRequest} from '../api/utils';

function StoresScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        console.log('Load start');
        const users = await apiRequest('GET', '/users');
        console.log('Load done', users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }

    loadUsers();
  }, []);

  return (
    <View>
      {users.map((user, index) => (
        <Text key={index}>{user.name}</Text>
      ))}
    </View>
  );
}

export default StoresScreen;
