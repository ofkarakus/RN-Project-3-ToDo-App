import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import {inputPanel} from '../styles';

const InputPanel = ({setTodo, addTodo, setId, todo, todoId}) => {
  const getInput = text => {
    setTodo(text);
  };

  return (
    <View style={inputPanel.footer}>
      <TextInput
        style={inputPanel.input}
        placeholder="Type here to add your ToDo!"
        onChangeText={getInput}
        onSubmitEditing={event => {
          setTodo(event.nativeEvent.text);
          addTodo();
          setId(todoId + 1);
          setTodo('');
        }}
        autoFocus={true}
        value={todo}
      />
      <TouchableOpacity
        style={inputPanel.button}
        onPress={() => {
          addTodo();
          setId(todoId + 1);
          setTodo('');
        }}>
        <Text style={inputPanel.btnText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
};

export {InputPanel};
