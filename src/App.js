import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';

import {ToDoCard, InputPanel} from './components';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoId, setId] = useState(0);

  const addTodo = () => {
    for (let item of todoList) {
      if (item.text == todo) {
        return alert("You've already had this ToDo!");
      }
    }
    setTodoList([{text: todo, id: todoId, isDone: false}, ...todoList]);
  };

  const doneTodo = (currentTodosId) => {
    let currentTodosIndex = todoList.findIndex(x => x.id == currentTodosId)
    let newArr = [...todoList]
    newArr[currentTodosIndex].isDone = !newArr[currentTodosIndex].isDone
    setTodoList(newArr)
  }

  const deleteTodo = (currentTodosId) =>
    setTodoList(todoList.filter((x) => x.id !== currentTodosId));

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>TODO</Text>
        <Text style={styles.counter}>{todoList.length}</Text>
      </View>

      <View style={styles.main}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todoList}
          renderItem={({item}) => (
            <ToDoCard 
              content = {item} 
              deleteTodo = {deleteTodo}
              doneTodo = {doneTodo}
            />
          )}
          ListEmptyComponent={()=> <Text style={styles.empty}>There is no ToDo in your list.</Text>}
        />
      </View>
      
      <InputPanel
        setTodo = {setTodo}
        addTodo = {addTodo}
        setId = {setId}
        todo = {todo}
        todoId = {todoId}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    color: '#FBA730',
    fontWeight: 'bold',
    fontSize: 35,
  },
  counter: {
    color: '#FBA730',
    fontSize: 30,
  },

  main: {
    flex: 1,
    alignItems: 'center',
  },
  empty: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16
  }
});

export default App;
