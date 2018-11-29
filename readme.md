# Dogstagram - React Native workshop

## Requirement
- Install [docker](https://www.docker.com/products/docker-desktop)
- Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same wireless network as your computer.

**An easier way to start with it is to use [Snack](https://snack.expo.io/) from Expo with the Expo client on your mobile, then you can directly jump to step 1**

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
Create our first component called Avatar with View and Text (native components) in order to display a dot with initial inside.
Introduce props with:
- avatarColor: background color of the avatar (dot)
- initial: text inside the dot

## Step 2: Counter with State
- Replace initial by a click counter value. The counter is incremented each time we press on the avatar (new component TouchableOpacity with onPress (fade in-out effect / playing with opacity))
- Add an image in our avatar (local vs remote source)

## Step 3: Fetch from API
- Fetch data from an api (https://dog.ceo/api/breeds/image/random/50) 
- ActivityIndicator when loading
- Add a Title
- Use FlatList to display the data
- Use Dimensions to get the screen width

## Step 4: Navigation
- Create a navigation with react-navigation (install: `npm i react-navigation`)
- Create component Feed (for the list of dogs) and Detail (for the detail of a dog)
- Get parameters from navigation
- Add a small animation