import React from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import {bool, object, string, array, func} from 'prop-types';
import {styles} from './styles';
import UserCard from '../../components/UserCard';
import SearchBar from '../../components/SearchBar';
import {
  fetchUsers,
  filterUsers,
  persistUser,
} from '../../redux/actions/actions';
import Footer from '../../components/Footer';
import {connect} from 'react-redux';

const {container, scroll} = styles;

const Home = ({
  filterUsers,
  filteredUsers,
  navigation,
  loading,
  persistUser,
  persist,
}) => {
  const displayUsers = filteredUsers.map(({login, avatar_url, id, url}) => (
    <UserCard
      key={id}
      name={login}
      image={avatar_url}
      navegate={() => {
        navigation.push('User', {url});
        persistUser(login);
      }}
    />
  ));
  return (
    <View style={container}>
      <View>
        <Text>Last user visited: {persist || ''}</Text>
      </View>
      <SearchBar placeholder={'search'} callback={filterUsers} />
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={scroll}>{displayUsers}</View>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
};

Home.propTypes = {
  filterUsers: func,
  persistUser: func,
  filteredUsers: array,
  loading: bool,
  navigation: object,
  persist: string,
};

const mapStateToProps = ({github}) => ({
  users: github.data,
  filteredUsers: github.filteredUsers,
  loading: github.loading,
  persist: github.persist,
});

export default connect(
  mapStateToProps,
  {fetchUsers, filterUsers, persistUser},
)(Home);
