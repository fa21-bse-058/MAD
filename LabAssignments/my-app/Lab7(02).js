// Lab7(02).js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const Lab7_02 = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [students, setStudents] = useState([]);
  const [searchResult, setSearchResult] = useState('');

  const addStudent = () => {
    if (name && gpa) {
      const newStudent = { name, gpa };
      setStudents([...students, newStudent]);
      setName('');
      setGPA('');
    }
  };

  const searchStudent = () => {
    const foundStudent = students.find(student => student.name === name);
    if (foundStudent) {
      setSearchResult(`${foundStudent.name}: ${foundStudent.gpa}`);
    } else {
      setSearchResult('Student not found');
    }
  };

  const removeStudent = () => {
    setStudents(students.filter(student => student.name !== name));
  };

  const clearAll = () => {
    setStudents([]);
    setSearchResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={text => setGPA(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Student" onPress={addStudent} />
        <Button title="Search" onPress={searchStudent} />
      </View>
      <Text style={styles.result}>{searchResult}</Text>
      <ScrollView style={styles.studentList}>
        {students.map((student, index) => (
          <Text key={index} style={styles.studentItem}>{`${student.name}: ${student.gpa}`}</Text>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Remove Data" onPress={removeStudent} />
        <Button title="Clear All" onPress={clearAll} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  result: {
    textAlign: 'center',
    marginBottom: 10,
  },
  studentList: {
    maxHeight: 200,
    marginBottom: 10,
  },
  studentItem: {
    marginBottom: 5,
  },
});

export default Lab7_02;
