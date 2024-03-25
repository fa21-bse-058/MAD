import React from 'react';
import { View, StyleSheet } from 'react-native';
import component from './component';
import chessboard from './chessboard';
const App = () => {
  return (
    <View style={styles.container}>
      <chessboard />
      <component/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the entire app
  },
});

export default App;
