import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

export default class App extends React.Component {
  state = {}

  componentDidMount() {
    this.fetchImages()
  }

  fetchImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const { message } = await response.json();

    this.setState({
      images: message
    });
  }

  renderContent = () => {
    return (this.state.images) ?
      <Avatar imageUrl={this.state.images[0]} /> :
      <Text>Loading...</Text>
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
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
