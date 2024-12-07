import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useBento } from '../contexts/BentoContext'; // Import the custom hook

const AssistanceScreen = () => {
  const { changeAssistanceStatus } = useBento(); // Get the function to change the status

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assistance Needed</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.goodButton]}
          onPress={() => {
            changeAssistanceStatus('good'); // Set status to 'good' (green)
          }}
        >
          <Text style={styles.buttonText}>All Good</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.requestButton]}
          onPress={() => {
            changeAssistanceStatus('bad'); // Set status to 'bad' (red)
          }}
        >
          <Text style={styles.buttonText}>Request Assistance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light grey background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Dark color for the title text
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'column', // Stack buttons vertically
    width: '100%', // Full width of the screen
    justifyContent: 'space-between', // Space buttons evenly
  },
  button: {
    height: 300, // Set a fixed height for buttons
    marginBottom: 10, // Spacing between buttons
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // Shadow for better contrast
  },
  requestButton: {
    backgroundColor: '#ff4f4f', // Red button for requesting assistance
  },
  goodButton: {
    backgroundColor: '#4caf50', // Green button for "All Good"
  },
  buttonText: {
    fontSize: 36,
    color: '#fff', // White text on the buttons
    fontWeight: 'bold',
  },
});

export default AssistanceScreen;
