import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todos from './Components/Todos';
import App from './App';
import DisplayTodos from './Components/DisplayTodos';

export default function Main() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

        <Todos />
        <DisplayTodos/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});