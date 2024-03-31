import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Todo from './Todo';

export  function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Todo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16, 
    paddingTop: 16, // 
  },
});

