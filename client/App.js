import React, { useState } from 'react';
import { StyleSheet, Text, Image, Button, View, TextInput, Linking } from 'react-native';

import Logo from './assets/github.png';

export default function App() {
  const [username, setUsername] = useState("PaulCollas");
  const [user, setUser] = useState({});

  const [fields, setFields] = useState([]);

  async function search() {
    try {
      // Use ngrok
      const response = await fetch(`http://f07b-2a01-cb05-3b-aa00-4031-e93e-15a1-6894.ngrok.io/users/${username}`);

      // const response = await fetch(`http://localhost:4242/users/${username}`);
      

      const user = await response.json();

      setUser(user);
      setFields(Object.keys(user))

      console.log(user)

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
            onPress={search}
            color="#000"
          />
        </View>

        <Text style={styles.h2}>Informations of user :</Text>

        <Image style={styles.logo} source={{uri: user.avatar_url}} /> 
        <Text style={styles.h2}>{user.name}</Text>
        <Text style={styles.h2}>{user.bio}</Text>


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
  h3: {
    color: '#F0F2F5',
    fontSize: 12,
    marginTop: 8,
  },
  image: {
    width: 75,
    height: 75,
    justifyContent: 'center',
  },

  logo: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    marginTop: 15,
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

  fixToText: {
    backgroundColor: '#F0F2F5',
    borderRadius: 5,
    padding: 8,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }

});
