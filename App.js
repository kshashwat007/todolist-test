import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Get coffee', key: '1' },
    { text: 'Play games', key: '2' },
    { text: 'Get pizza', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length >= 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert('Oops!', 'A new todo must be more than 2 characters long', [
        { text: 'Ok', onPress: () => console.log('Alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f3'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
