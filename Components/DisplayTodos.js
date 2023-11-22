import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import { View, Text, Button, ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('active');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="Active" onPress={() => setSort('active')} />
        <Button title="Completed" onPress={() => setSort('completed')} />
        <Button title="All" onPress={() => setSort('all')} />
      </View>
      <ScrollView>
        {props.todos.length > 0 &&
          (sort === 'active'
            ? props.todos.map((item) => {
                return item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : sort === 'completed'
            ? props.todos.map((item) => {
                return item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : sort === 'all'
            ? props.todos.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              ))
            : null)}
      </ScrollView>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
