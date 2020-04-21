import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const counter = () => {
    const {count, name}=useSelector(state=>({
        ...state.counterReducer,
        ...state.nameReducer
    }));
    
    const dispatch=useDispatch();

    const incrementCount = () => {
        console.log('touch i');
        dispatch({
            type:'INCREMENT'
        });
    };

    const decrementCount = () => {
        dispatch({
            type:'DECREMENT'
        });
        console.log('touch d');
    }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Counter : {count}</Text>
      <Text>Name : {name}</Text>

      <View style={{marginVertical: 10}}></View>
      <View>
        <TouchableOpacity style={{backgroundColor: 'green', padding:30}} onPress={incrementCount}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'red', padding:30}} onPress={decrementCount}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default counter;
