import React from 'react';
import {View, Text, Image} from 'react-native';
import {string, func} from 'prop-types';
import {styles} from './styles';

const {container, avatar} = styles;

const UserCard = ({name, image, navegate}) => {
  return (
    <View style={container}>
      <Image style={avatar} source={{uri: image}} />
      <Text>{name}</Text>
      <Text onPress={navegate}>More</Text>
    </View>
  );
};

UserCard.propTypes = {
  name: string,
  image: string,
  navegate: func,
};

export default UserCard;
