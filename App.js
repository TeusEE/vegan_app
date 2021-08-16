import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Signin from "./Signin";
import Imagepick from "./Imagepick";

export default function App() {
  return (                
      <View style={styles.container}>
        <Signin />                
        <Imagepick />            
      </View>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }      
});