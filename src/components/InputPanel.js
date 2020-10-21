import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const InputPanel = ({setTodo, addTodo, setId, todo, todoId}) => {
  
  const getInput = (text) => {
    setTodo(text);
  };

  return (
    <View style={styles.footer}>
      <TextInput
        style={styles.input}
        placeholder="Type here to add your ToDo!"
        onChangeText={getInput}
        onSubmitEditing={(event) => {
          setTodo(event.nativeEvent.text);
          addTodo();
          setId(todoId + 1);
          setTodo('');
        }}
        autoFocus={true}
        value={todo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTodo();
          setId(todoId + 1);
          setTodo('');
        }}>
        <Text style={styles.btnText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#B0BEC5',
    marginHorizontal: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 5,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: '32%',
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#37474F',
    width: '50%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export {InputPanel};
