FROM node

LABEL maintainer="sylvain.barraud@nexthink.com"

RUN npm install -g expo-cli

RUN mkdir /var/react-native-src
WORKDIR /var/react-native-src

COPY entrypoint.sh /
ENTRYPOINT [ "/entrypoint.sh" ]