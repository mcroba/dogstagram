import React from "react";
import { StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const padding = 2;
const nbColumn = 3;
const avatarSize = (Dimensions.get("window").width - ((nbColumn + 1) * padding)) / nbColumn;

const Avatar = ({imageUrl, onPress}) => {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.avatar}>
            <Image source={{uri: imageUrl}} style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avatar: {
        padding
    },
    image: {
        height: avatarSize,
        width: avatarSize
    },
});

export default Avatar;