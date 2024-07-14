import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AppBar = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <FontAwesome name="user-circle-o" size={28} color="#6AB7E2" style={styles.icon} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.verticalDots}>
        <FontAwesome name="circle" size={6} color="#6AB7E2" style={styles.dot} />
        <FontAwesome name="circle" size={6} color="#6AB7E2" style={styles.dot} />
        <FontAwesome name="circle" size={6} color="#6AB7E2" style={styles.dot} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  verticalDots: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  dot: {
    marginVertical: 1,
  },
});

export default AppBar;
