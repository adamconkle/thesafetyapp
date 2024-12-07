import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Correct import for AsyncStorage

export const BentoContext = createContext();

export const BentoProvider = ({ children }) => {
  const [signedInUsers, setSignedInUsers] = useState([]); // Default to an empty array

  useEffect(() => {
    const getSignedInUsers = async () => {
      try {
        const users = await AsyncStorage.getItem('signedInUsers');
        if (users !== null) {
          setSignedInUsers(JSON.parse(users));
        }
      } catch (error) {
        console.error('Error fetching signed-in users from storage:', error);
      }
    };
    getSignedInUsers();
  }, []);

  const saveSignedInUsers = async (users) => {
    try {
      await AsyncStorage.setItem('signedInUsers', JSON.stringify(users));
      setSignedInUsers(users);
    } catch (error) {
      console.error('Error saving signed-in users to storage:', error);
    }
  };

  const addUser = (user) => {
    const updatedUsers = [...signedInUsers, user];
    saveSignedInUsers(updatedUsers);
  };

  const removeUser = (userName) => {
    const updatedUsers = signedInUsers.filter(user => user.name !== userName);
    saveSignedInUsers(updatedUsers);
  };

  return (
    <BentoContext.Provider value={{ signedInUsers, addUser, removeUser }}>
      {children}
    </BentoContext.Provider>
  );
};
