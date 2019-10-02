import {
  GET_USERS,
  FILTER_USERS,
  GET_USER,
  LOADING,
  PERSIST,
} from './actionsType';
import githubService from '../../service/githubService';
import {AsyncStorage} from 'react-native';

export const fetchUsers = params => async dispatch => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    const data = await githubService.getUsers(params);
    dispatch({
      type: GET_USERS,
      payload: data,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  } catch (e) {
    console.log(e);
  }
};

export const filterUsers = username => dispatch => {
  dispatch({
    type: FILTER_USERS,
    payload: username.toLowerCase(),
  });
};

export const fetchUser = url => async dispatch => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    const data = await githubService.getUser(url);
    dispatch({
      type: GET_USER,
      payload: data,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
  } catch (e) {
    console.log(e);
  }
};

export const persistUser = user => async dispatch => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    const getUser = await AsyncStorage.getItem('user');
    dispatch({
      type: PERSIST,
      payload: getUser,
    });
  } catch (e) {
    console.log(e);
  }
};
