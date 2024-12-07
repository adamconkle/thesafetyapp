import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Ionicons name="alert-circle" size={30} style={styles.icon} />
      <Ionicons name="chatbubble" size={30} style={styles.icon} />
      <Ionicons name="call" size={30} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  icon: {
    color: '#000',
  },
});

export default Footer;
