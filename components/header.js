import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#f4f3f3'
  },
  title: {
    textAlign: 'left',
    color: 'black',
    fontSize: 32,
    marginLeft: 35,
    fontWeight: 'bold'
  }
});
