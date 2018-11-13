import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar avatarColor="tomato" initial="SM" />
        <Avatar avatarColor="lime" initial="SB" />
        <Avatar avatarColor="teal" initial="NX" />
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
