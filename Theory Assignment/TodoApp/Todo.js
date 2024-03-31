import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { IconButton } from "react-native-paper";

const dummydata = [{
    id: "01",
    title: "Wash Car",
},
{
    id: "02",
    title: "Read A book",
}];

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState(dummydata);

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            const newTodo = {
                id: Date.now().toString(),
                title: todo,
            };
            setTodolist([...todolist, newTodo]);
            setTodo("");
        }
    };

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todolist.filter((todo) => todo.id !== id);
        setTodolist(updatedTodoList);
    };

    const renderTodos = ({ item }) => {
        return (
            <View style={{ backgroundColor: "#1e90ff", borderRadius: 6, paddingHorizontal: 6, paddingVertical: 12, marginBottom: 12, flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 2 }}>{item.title}</Text>
                <IconButton icon="pencil" color="#fff" />
                <IconButton icon="trash-can" color="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16 }}>
            <TextInput
                style={{ borderWidth: 2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 12, paddingHorizontal: 16 }}
                placeholder='Add a task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            <TouchableOpacity
                style={{ backgroundColor: "#1e90ff", borderRadius: 6, paddingVertical: 8, marginVertical: 34, alignItems: "center" }}
                onPress={handleAddTodo}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    Add
                </Text>
            </TouchableOpacity>
            <FlatList
                data={todolist}
                renderItem={renderTodos}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Todo;

const styles = StyleSheet.create({});
