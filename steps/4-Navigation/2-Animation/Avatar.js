import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

export default class Avatar extends React.Component {
  render() {
    return (  
      <TouchableOpacity style={{...styles.avatar, backgroundColor: this.props.color}} onPress={this.props.onPress}>
        <Image source={{uri: this.props.imageUrl}} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const padding = 2;
const nbColumn = 3;
const avatarSize = (Dimensions.get("window").width - ((nbColumn + 1) * padding)) / nbColumn;

const styles = StyleSheet.create({
  avatar: {
    padding
  },
  image: {
      height: avatarSize,
      width: avatarSize
  },
});
