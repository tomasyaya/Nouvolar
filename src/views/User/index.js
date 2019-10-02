import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {fetchUser} from '../../redux/actions/actions';
import {object, func} from 'prop-types';
import {styles} from './styles';

const {container, avatar} = styles;

const User = ({navigation, user, fetchUser}) => {
  const {
    state: {params},
  } = navigation;

  const {login, followers, html_url, location, public_repos, avatar_url} = user;

  useEffect(() => {
    fetchUser(params.url);
  }, [fetchUser, params.url]);

  return (
    <View style={container}>
      <Image style={avatar} source={{uri: avatar_url}} />
      <Text>Username: {login}</Text>
      <Text>Followers {followers}</Text>
      <Text>Location: {location}</Text>
      <Text>Public Repos: {public_repos}</Text>
      <Text>Github: {html_url}</Text>
    </View>
  );
};

User.propTypes = {
  navigation: object,
  user: object,
  fetchUser: func,
};

const mapStateToProps = ({github}) => ({
  user: github.user,
});

export default connect(
  mapStateToProps,
  {fetchUser},
)(User);
