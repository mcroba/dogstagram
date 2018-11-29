import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Avatar extends React.Component {
  render() {
    return (  
        <View style={{...styles.avatar, backgroundColor: this.props.color}}>
            <Text style={styles.initials}>{this.props.initials}</Text>
        </View>
    )
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