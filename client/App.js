import React, { useState } from 'react';
import { StyleSheet, Text, Image, Button, View, TextInput } from 'react-native';

import Logo from './assets/github.png';

export default function App() {
  const [username, setUsername] = useState("Dylan");
  const [user, setUser] = useState({});

  async function search() {
    try {
      // Use ngrok
      // const response = await fetch(`http://6188-37-172-47-181.ngrok.io/api/users/${username}`);

      const response = await fetch(`http://localhost:4242/api/users/${username}`);
      

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
        <Text style={styles.h1}>Search In Github</Text>
        <Text style={styles.h2}>Please enter a username :</Text>
      </View>
      <View style={styles.middleContainer}>


        <TextInput
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="TRY THIS USERNAME"
            style={styles.button}
            onPress={search}
            color="#000"
          />
        </View>
        <Text style={styles.h2}>Informations of user : {user.username}</Text>

      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.h2}>Efrei - Paul COLLAS</Text>  
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 40,
    marginTop: 20,
  },
  h2: {
    color: '#F0F2F5',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 75,
    height: 75,
    justifyContent: 'center',
  },
  input: {
    height: 40,
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
    alignItems: 'center',
    padding: 10,
  },

});
