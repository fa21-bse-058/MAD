import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  // Function to render a single row of squares
  const renderRow = (rowIndex) => {
    const squares = [];
    for (let colIndex = 0; colIndex < 8; colIndex++) {
      const squareColor = (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black';
      squares.push(<View key={colIndex} style={[styles.square, { backgroundColor: squareColor }]} />);
    }
    return <View key={rowIndex} style={styles.row}>{squares}</View>;
  };

  // Function to render the entire chessboard
  const renderChessBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(renderRow(i));
    }
    return <View style={styles.board}>{rows}</View>;
  };

  return (
    <View style={styles.container}>
      {renderChessBoard()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
  },
});

export default component;


