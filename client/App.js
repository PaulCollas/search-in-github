import React, { useState } from 'react';
import { StyleSheet, Text, Image, Button, View, TextInput } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("Dylan");
  const [user, setUser] = useState({});

  async function search() {
    try {
      const response = await fetch(`http://172.20.10.2:4242/api/users/${username}`);
      const user = await response.json();

      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode: "cover",
            height: 100,
            width: 300
          }}
          source={ {uri: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} }
        />
      </View>

      <TextInput
        onChangeText={setUsername}
        value={username}
      />

      <Button
        onPress={search}
        title="Search"
        color="#841584"
      />

      <Text>{user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
