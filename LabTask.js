import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

function Game() {
  const [inputText, setInputText] = useState("");

  const handleNumberPress = (number) => {
    setInputText(inputText + number.toString());
  };

  const clearInput = () => {
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Enter your number"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        keyboardType="numeric"
      />
      {/* Buttons for numbers 0-9 */}
      <View style={styles.buttonRow}>
        {[...Array(10).keys()].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number)}
          >
            <Text style={styles.numberButtonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Clear button */}
      <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  numberButton: {
    width: 60,
    height: 60,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  numberButtonText: {
    fontSize: 24,
  },
  clearButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  clearButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Game;
