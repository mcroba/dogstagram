import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Avatar from "./Avatar";

export default class Feed extends React.Component {
  state = {
    isLoading: true
  }

  handleAvatarPress = (item) => {
    this.props.navigation.push("Detail", {item})
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const { message: data } = await response.json();
    
    this.setState({
      images: data,
      isLoading: false
    })
  }

  renderContent = () => {
    return (this.state.isLoading) ?
      <ActivityIndicator style={styles.loading} size="large" /> :
      <FlatList 
        data={this.state.images} 
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.list}
        ListEmptyComponent={null}
        renderItem={({item}) => <Avatar imageUrl={item} onPress={this.handleAvatarPress.bind(this, item)} />}
        numColumns={3}
      />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 40,
    paddingBottom: 8,
  },
  list: {
    marginLeft: -2,
    marginTop: -2
  },
  loading: {
    flex: 1
  },
});