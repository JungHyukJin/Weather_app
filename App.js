import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>asdsafdasf dsa</Text>
      <View style={styles.yellowView}/>
      <View style={styles.blueView}/>
    </View>
  );
};

const styles = 
StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  yellowView: {
    flex:1,
    backgroundColor:"yellow"
  },
  blueView: {
    flex:1,
    backgroundColor:"blue"
  }
});
