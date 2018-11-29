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
        <Image source={{uri: "https://illustrationtime.files.wordpress.com/2013/08/minionme.png"}} style={styles.image} />
        {/*<Image source={require('./assets/avatar.jpg')} style={styles.image} />*/}
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
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
    resizeMode: "contain",
  },
  initials: {
    color: "#fff",
    fontSize: 48,
    position: "absolute",
    textShadowColor: "#000",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  }
});