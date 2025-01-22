import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/appbar';
import MatrixComponent from './components/matrix/matrix';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Collage</Text>
        <View style={styles.items}>
          <AppBar text="Datos Generales" />
        </View>
        
        <GestureHandlerRootView style={{ flex: 1 }}>
      <MatrixComponent />
    </GestureHandlerRootView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    zIndex: 100,
  },
});

export default App;