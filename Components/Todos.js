import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const add = () => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={(text) => setTodo(text)}
        value={todo}
        placeholder="Add a new todo"
      />
      <Button title="Add" onPress={add} />
      <ScrollView>
        {props.todos.length > 0 &&
          props.todos.map((item) => (
            <Text key={item.id}>{item.item}</Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
