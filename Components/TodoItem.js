import React, { useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const inputRef = useRef();

  const changeFocus = () => {
    inputRef.current.focus();
  };

  const update = (id, value) => {
    updateTodo({ id, item: value });
  };

  return (
    <View style={styles.card}>
      <TextInput
        ref={inputRef}
        defaultValue={item.item}
        onEndEditing={() => update(item.id, inputRef.current.value)}
        style={styles.textInput}
      />
      <View style={styles.btns}>
        <TouchableOpacity onPress={changeFocus}>
          <MaterialIcons name="edit" size={24} color="black" />
        </TouchableOpacity>
        {item.completed === false && (
          <TouchableOpacity
            style={{ color: "green" }}
            onPress={() => completeTodo(item.id)}
          >
            <MaterialIcons name="done" size={24} color="green" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{ color: "red" }}
          onPress={() => removeTodo(item.id)}
        >
          <MaterialIcons name="close" size={24} color="red" />
        </TouchableOpacity>
      </View>
      {item.completed && <Text style={styles.completed}>done</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  completed: {
    marginLeft: 10,
    color: "green",
  },
});

export default TodoItem;
