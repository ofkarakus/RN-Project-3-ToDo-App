import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import {ToDoCard, InputPanel} from './components';

import {main} from './styles';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoId, setId] = useState(0);

  const addTodo = () => {
    for (let item of todoList) {
      if (item.text === todo) {
        return alert("You've already had this ToDo!");
      }
    }
    setTodoList([{text: todo, id: todoId, isDone: false}, ...todoList]);
  };

  const doneTodo = currentTodosId => {
    let currentTodosIndex = todoList.findIndex(x => x.id == currentTodosId);
    let newArr = [...todoList];
    newArr[currentTodosIndex].isDone = !newArr[currentTodosIndex].isDone;
    setTodoList(newArr);
  };

  const deleteTodo = currentTodosId =>
    setTodoList(todoList.filter(x => x.id !== currentTodosId));

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.keyboardAvoid}>
        <View style={main.header}>
          <Text style={main.heading}>TODO</Text>
          <Text style={main.counter}>{todoList.length}</Text>
        </View>

        <View style={main.main}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={todoList}
            renderItem={({item}) => (
              <ToDoCard
                content={item}
                deleteTodo={deleteTodo}
                doneTodo={doneTodo}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={main.empty}>There is no ToDo in your list.</Text>
            )}
          />
        </View>

        <InputPanel
          setTodo={setTodo}
          addTodo={addTodo}
          setId={setId}
          todo={todo}
          todoId={todoId}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
