import React from 'react';
import {StyleSheet, View, Image, Button,Text } from 'react-native';
import Login from './LoginScreen'

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});