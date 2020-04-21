/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import {Text, View, TouchableOpacity, Switch} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Counter from './counter';

import Name2 from './name2';
import rootReducer from './store/reducers/rootReducer';

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Name2 />
    </Provider>
  );
};

export default App;
