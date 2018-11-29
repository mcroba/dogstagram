import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

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
        <Image source={{uri: this.props.imageUrl}} style={styles.image} />
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
  image: {
    height: 200,
    width: 200
  }
});
