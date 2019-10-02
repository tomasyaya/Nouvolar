import React from 'react';
import {TextInput, View} from 'react-native';
import {string, func} from 'prop-types';
import {styles} from './styles';

const {container, input} = styles;

const SearchBar = ({placeholder, callback}) => {
  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder={placeholder}
        onChangeText={e => callback(e)}
      />
    </View>
  );
};

SearchBar.propTypes = {
  placeholder: string,
  callback: func,
};

export default SearchBar;
