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
- Fetch data from an api (https://dog.ceo/api/breeds/image/random/50) 
- ActivityIndicator when loading
- Use FlatList to display the result

FOR US:
- fetching without Flatlist and minimal Avatar using dog image
App.js
```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  state = {}

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const { message: images } = await response.json();
    
    this.setState({
      images
    })
  }

  renderContent = () => {
    return (this.state.images) ? this.state.images.map((image, index) => {
      return (<Avatar key={index} imageUrl={image} />);
    }): null;
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
  text: {
    color: "#000",
    fontSize: 48,
  },
});
```

Avatar.js
```
return (
    <TouchableOpacity onPress={onPress} style={styles.avatar}>
        <Image source={{uri: imageUrl}} style={styles.image} />
    </TouchableOpacity>
)
```

- ActivityIndicator
```
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Avatar from "./Avatar";

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const { message: images } = await response.json();
    
    /*this.setState({
      images,
      isLoading: false
    })*/
  }

  renderContent = () => {
    return (this.state.isLoading) ?
      <ActivityIndicator style={styles.loading} size="large" /> :
      null
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
  loading: {
    flex: 1
  },
});
```

## Step 4: Navigation
- Create a navigation with react-navigation (install: `npm i react-navigation`)
- Create component Feed (for the list of dogs) and Detail (for the detail of a dog)
- Get parameters from navigation
- Add a small animation

FOR US:
App.js
```
import {createStackNavigator} from "react-navigation";
import Feed from "./Feed";
import Detail from "./Detail";

export default createStackNavigator ({
  Home: {
    screen: Feed,
    navigationOptions: {
      title: "Dogstagram"
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: "Detail"
    }
  }
});
```

Feed.js:
copy/paste from App, then rename class name App => Feed
remove title (and style)
container marginTop: -2

Details.js
```
import React from "react";
import {View, Text} from "react-native"

export default class Detail extends React.Component {
    render() {
        return (
            <View>
                <Text>detail</Text>
            </View>
        )
    }
}
```

- Get parameter (step 1)

Feed
```
handleAvatarPress = (item) => {
  this.props.navigation.push("Detail", {item});
}

...  

renderItem={({item}) => <Avatar imageUrl={item} onPress={this.handleAvatarPress.bind(this, item)} />}
```

Detail
```
render() {
    const {item} = this.props.navigation.state.params;
    return (
        <View>
            <Text>{item}</Text>
        </View>
    )
}
```

- Add increment on click with TouchableWithoutFeedback

Detail.js
```
import React from "react";
import {View, Image, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native"

export default class Detail extends React.Component {
    state = {
        // simulate a value retrieve from the API
        likes: Math.floor(Math.random() * 100)
    }

    onItemLike = () => {
        this.setState(prevState => {
            return { likes: prevState.likes + 1 }
        });
    }

    render() {
        const {item} = this.props.navigation.state.params;
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.onItemLike}>
                    <Image source={{uri: item}} style={styles.image}/>
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
```