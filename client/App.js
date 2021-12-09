import React, { useState } from 'react';
import { StyleSheet, Text, Image, Button, View, TextInput } from 'react-native';
import Logo from './assets/github.png';

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
      <View style={styles.topContainer}>
        <Image
            source={Logo}
            style={styles.image}
          />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.h1}>Search In Github</Text>
        <Text style={styles.h2}>Please enter a username :</Text>

        <TextInput
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="TRY THIS USERNAME"
            style={styles.button}
            // onPress={() => this.onPress()}
            color="#000"
          />
        </View>
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 40,
  },
  h2: {
    color: '#F0F2F5',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 100,
    borderWidth: 1,
    borderColor: '#F0F2F5',
    color: '#F0F2F5',
    padding: 10,
  },

  buttonContainer: {
    backgroundColor: '#F0F2F5',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },

  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 50,
  },

});
