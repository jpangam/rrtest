import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

const Name2 = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    const handleInput = () =>{
        dispatch({
            type:'SAVE_NAME',
            payload: name
        });
    }
   

    return (
        <View>
            <TextInput placeholder="name plz" onChangeText={text => setName(text)}></TextInput>
            <Text>{name}</Text>
            <TouchableOpacity onPress={handleInput}><Text>Click</Text></TouchableOpacity>
        </View>
    );
}

export default Name2;