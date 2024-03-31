/* using javascript*/
import React from 'react';
import { View, StyleSheet } from 'react-native';

const chessboard = () => {
  const renderchessboard = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <View key={i} style={styles.row}>
        {Array.from({ length: 8 }, (_, j) => (
          <View
            key={j}
            style={[styles.square, { backgroundColor: (i + j) % 2 === 0 ? 'white' : 'black' }]}
          />
        ))}
      </View>
    ));
  };

  return <View style={styles.container}>{renderchessboard()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
  },
});

export default chessboard;
