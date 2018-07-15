import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers';
import { Header } from './app/components/common';
import LibraryList from './app/components/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {createStore(reducers)}>
      <View style={styles.container}>
        <Header headerText = "Tech Stack" />
        <LibraryList/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
