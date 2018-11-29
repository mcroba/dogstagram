import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar color="tomato" initials="SM" />
        <Avatar color="lime" initials="SB" />
        <Avatar color="teal" initials="NX" />
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
