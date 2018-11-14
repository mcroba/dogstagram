import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    Animated
} from "react-native";

export default class Detail extends React.Component {
    state = {
        // simulate a value retrieve from the API
        likes: Math.floor(Math.random() * 100),
        scale: new Animated.Value(0),
    }
    
    onItemLike = () => {
        Animated.sequence([
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(this.state.scale, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();

        this.setState(prevState => {
            return {likes: prevState.likes + 1};
        })
    }

    render() {
        const { item } = this.props.navigation.state.params;

        const bouncyImage = this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.9],
        });
      
        const imageStyle = {
            transform: [{ scale: bouncyImage }],
        };

        return (
            <View>
                <TouchableWithoutFeedback onPress={this.onItemLike}>
                    <Animated.Image source={{uri: item}} style={[imageStyle, styles.image]} />
                </TouchableWithoutFeedback>
                <Text style={styles.text}>{`This dog has ${this.state.likes} likes`}</Text>
            </View>
        )
    }
}

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    image: {
        height: width,
        width: width
    },
    text: {
        alignSelf: "center",
        padding: 5
    }
});