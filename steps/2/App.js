import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  state = {
    count: 0
  }

  handleAvatarPress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Avatar avatarColor="tomato" onPress={this.handleAvatarPress} />
        <Text style={styles.text}>{this.state.count}</Text>
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
  text: {
    color: "#000",
    fontSize: 48,
  },
});
