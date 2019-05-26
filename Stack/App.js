import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './src/layouts/main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/store/reducers'

const store = createStore(reducer);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
