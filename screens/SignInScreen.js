import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const SignInScreen = () => {
  // Initial default values for the inputs
  const [name, setName] = useState('Name');
  const [location, setLocation] = useState('Location');

  const navigation = useNavigation(); // Navigation hook

  const handleSignIn = () => {
    // Navigate to StatusScreen and pass name and location
    navigation.navigate('Status', { name, location });
  };

  const handleNameChange = (text) => {
    // If the default value is typed, clear it when user starts typing
    if (text === 'Name') {
      setName('');
    } else {
      setName(text);
    }
  };

  const handleLocationChange = (text) => {
    // If the default value is typed, clear it when user starts typing
    if (text === 'Location') {
      setLocation('');
    } else {
      setLocation(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
        // Reset value if it's still the default
        onFocus={() => {
          if (name === 'Name') setName('');
        }}
      />

      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={handleLocationChange}
        // Reset value if it's still the default
        onFocus={() => {
          if (location === 'Location') setLocation('');
        }}
      />

      {/* Custom Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6a5acd', // Blue-purple color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
