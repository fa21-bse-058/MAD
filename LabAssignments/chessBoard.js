import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chessboard = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 5,
    borderColor: 'black'
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default chessBoard;
