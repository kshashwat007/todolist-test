import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const date = new Date();
  const d = date.getDate();
  const m = months[date.getMonth()];

  // console.log(d, m);
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
      <Text style={styles.date}>
        {d} {m}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  date: {
    color: 'black',
    fontSize: 12,
    marginRight: 35,
    fontWeight: 'normal',
    marginTop: 12,
    backgroundColor: 'pink',
    borderRadius: 10,
    // padding: 16,
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 6
  }
});
