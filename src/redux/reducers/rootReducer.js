import {
  GET_USERS,
  FILTER_USERS,
  GET_USER,
  LOADING,
  PERSIST,
} from '../actions/actionsType';

const initialState = {
  data: [],
  filteredUsers: [],
  user: {},
  loading: false,
  persist: '',
};

export const rootReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        data: payload,
        filteredUsers: payload,
      };
    case FILTER_USERS:
      return {
        ...state,
        filteredUsers: [...state.data].filter(user =>
          user.login.includes(payload),
        ),
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    case PERSIST:
      return {
        ...state,
        persist: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
