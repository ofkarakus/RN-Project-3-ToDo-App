import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';

import {todoCard} from '../styles'

const ToDoCard = ({content, deleteTodo, doneTodo}) => {
  const [time, setTime] = useState(Date().split(' ').slice(0, 5).join(' - '));

  return (
    <TouchableOpacity 
      style={todoCard.container}
      onPress={() => {
        doneTodo(content.id)
      }}
    >
      <View style={todoCard.info}>
        <Text style={[todoCard.todo, content.isDone ? {textDecorationLine: 'line-through'} : null]}>{content.text}</Text>
        <Text style={todoCard.time}>{time}</Text>
      </View>
      <TouchableWithoutFeedback
        style={todoCard.deleteBtn}
        onPress={() => {
          deleteTodo(content.id);
        }}>
        <Image style={todoCard.delIcon} 
          source={require('../icons/delete.png')}
        />
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

export {ToDoCard};
