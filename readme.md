# Dogstagram - React Native workshop

## Requirement
- Install [docker](https://www.docker.com/products/docker-desktop)
- Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same wireless network as your computer.

## Environment
edit `.env` file and set your (wifi) ip address for `REACT_NATIVE_PACKAGER_HOSTNAME`. This IP address must be accessible from your phone (you might need to disable your firewall).

## Docker
create the docker container with \
`docker-compose up -d`

connect to the container \
`docker exec -it react-native-workshop bash`

## Expo
start development server in your container (`/var/react-native-src`)
```
cd Dogstagram
expo start
```

Scan the QR code with the Expo app (Android) or the Camera app (iOS)

## Debugger & Hot reloading
- You can access your debugger at http://XXX.XXX.XXX.XXX:19003/debugger-ui/ (where XXX.XXX.XXX.XXX is the ip address defined for `REACT_NATIVE_PACKAGER_HOSTNAME`)
- Hot reloading should be enable by default

## Step 1: Avatar Component with Props
Create our first component called avatar with View and Text (native components) in order to display a dot with initial inside

FOR US :
1. in App.js
```
<View style={styles.avatar} />

avatar: {
    backgroundColor: "tomato",
    borderRadius: 100,
    width: 200,
    height: 200,
},
```

2. create an external file avatar.js
```
import React from "react";
import { StyleSheet, View } from "react-native";

const Avatar = () => {
    return (
        <View style={styles.avatar} />
    )
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "tomato",
        borderRadius: 100,
        width: 200,
        height: 200,
    },
});

export default Avatar;
```

App.js
```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar />
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
```

3. introduce Props
Introduce props with
- avatarColor: background color of the avatar (dot)
- initial: text inside the dot

Use Text (native component) to display the initial props (some styles...)
=> folder step 1

## Step 2: Counter with State
- Replace initial by a click counter value. The counter is incremented each time we press on the avatar (with an effect)
- Add an image in our avatar

FOR US:
- new component TouchableOpacity with onPress (fade in-out effect / playing with opacity)
- image with local vs remote source

1. with counter
Avatar.js 
```
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Avatar = ({avatarColor, count, onPress}) => {
    return (
        <TouchableOpacity style={[styles.avatar, {backgroundColor: avatarColor}]} onPress={onPress}>
            <Text style={styles.text}>{count}</Text>
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
    text: {
        color: "#fff",
        fontSize: 48
    }
});

export default Avatar;
```

App.js
```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  state = {
    count: 0
  }

  handleAvatarPress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Avatar avatarColor="tomato" count={this.state.count} onPress={this.handleAvatarPress} />
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
```

2. folder step 2

## Step 3: Fetch from API
- Add a Title
- Fetch data from an api and use FlatList to display the result (optional use a ActivityIndicator)

## Step 4: Navigation
- Create a navigation with react-navigation (install: `npm i react-navigation`)
- Create component Feed (for the list of dogs) and Detail (for the detail of a dog)
- Get parameters from navigation
- Add a small animation