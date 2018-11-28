import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Avatar extends React.Component {
  state = {
    count: 0
  }

  handlePress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  
  render() {
    return (  
      <TouchableOpacity style={{...styles.avatar, backgroundColor: this.props.color}} onPress={this.handlePress}>
        <Text style={styles.initials}>{this.state.count}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    color: "#fff",
    fontSize: 48
  }
});
