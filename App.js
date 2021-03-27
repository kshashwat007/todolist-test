import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Get coffee', key: '1' },
    { text: 'Play games', key: '2' },
    { text: 'Get pizza', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
