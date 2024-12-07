import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useBento } from '../contexts/BentoContext'; // Import the custom hook

const StatusScreen = ({ route }) => {
  const { name, location } = route.params || {}; // Get name and location from route params
  const { assistanceStatus } = useBento(); // Get the current assistance status (good or bad)

  // Determine background color based on assistanceStatus
  const bentoBoxStyle = assistanceStatus === 'bad' ? styles.bentoBoxRequested : styles.bentoBoxGood;

  return (
    <View style={styles.container}>
      {name && location ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={bentoBoxStyle}>
            <Text style={styles.bentoText}>Name: {name}</Text>
            <Text style={styles.bentoText}>Location: {location}</Text>
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.emptyMessage}>No user signed in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background color
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  bentoBoxGood: {
    backgroundColor: 'green', // Green background when no assistance is requested
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  bentoBoxRequested: {
    backgroundColor: 'red', // Red background when assistance is requested
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  bentoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default StatusScreen;
