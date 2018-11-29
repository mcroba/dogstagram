import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Avatar from './Avatar';

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const { message } = await response.json();

    this.setState({
      images: message,
      isLoading: false
    });
  }

  renderContent = () => {
    return (this.state.isLoading) ?
      <ActivityIndicator style={styles.loading} size="large" /> :
      <FlatList 
        data={this.state.images} 
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.list}
        renderItem={({item}) => <Avatar imageUrl={item} />}
        numColumns={3}
      />
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dogstagram</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 8,
  },
  list: {
    marginLeft: -2
  }
});
