import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

export default class Detail extends React.Component {
  render() {
    const imageUrl = this.props.navigation.getParam("imageUrl");
    return (
      <View>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
    );
  }
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  image: {
      width,
      height: width,
  },
});
