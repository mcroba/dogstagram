import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Avatar = ({avatarColor, initial}) => {
    return (
        <View style={[styles.avatar, {backgroundColor: avatarColor}]}>
            <Text style={styles.initial}>{initial}</Text>
        </View>
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
    initial: {
        color: "#fff",
        fontSize: 48
    }
});

export default Avatar;