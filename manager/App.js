import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import Main from './src/Main'
import reducers from './src/Store'

const store = createStore(
  reducers, 
  applyMiddleware(thunk)
);


type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDXiSC_4lpWIqfoe6IGD0cSFJbUMoacBe4",
      authDomain: "manager-8467f.firebaseapp.com",
      databaseURL: "https://manager-8467f.firebaseio.com",
      projectId: "manager-8467f",
      storageBucket: "manager-8467f.appspot.com",
      messagingSenderId: "693512454269",
      appId: "1:693512454269:web:c822d3c63bab1423"
    };
    firebase.initializeApp(firebaseConfig);
  }

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
