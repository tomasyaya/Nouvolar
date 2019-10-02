import React, {useState, useReducer, useEffect} from 'react';
import AppNavegation from './src/navegation/AppNavegation';
import InitialData from './src/components/InitialData';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <InitialData />
        <AppNavegation />
      </Provider>
    </>
  );
};

export default App;
