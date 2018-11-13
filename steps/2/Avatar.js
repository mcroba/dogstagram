import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const Avatar = ({avatarColor, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.avatar, {backgroundColor: avatarColor}]}>
            {/*<Image source={{uri: "https://illustrationtime.files.wordpress.com/2013/08/minionme.png"}} style={styles.image} />*/}
            <Image source={require('./assets/avatar.jpg')} style={styles.image} />
        </TouchableOpacity>
    )
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
        resizeMode: "contain"
    },
});

export default Avatar;