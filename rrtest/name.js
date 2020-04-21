import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

const Name = () => {

    const dispatch = useDispatch();
    const {name}=useSelector(state=>({
        ...state.nameReducer
    }));

    const handleInput = (val) =>{
        dispatch({
            type:'SAVE_NAME',
            payload: val
        });
    }

    return (
        <View>
            <TextInput placeholder="name plz" onChangeText={handleInput}></TextInput>
            <Text>{name}</Text>
        </View>
    );
}

export default Name;