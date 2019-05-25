/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import firebase from 'firebase'
import Main from './src/layouts/main'
import { Button } from './src/components/index'

type Props = {};
export default class App extends Component<Props> {
  state = {
    loggedIn: false
  }
  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAz2mJoB_CJefEnMhYKayzzr648I9QZ51I",
      authDomain: "learn-project-c866b.firebaseapp.com",
      databaseURL: "https://learn-project-c866b.firebaseio.com",
      projectId: "learn-project-c866b",
      storageBucket: "learn-project-c866b.appspot.com",
      messagingSenderId: "537741622326",
      appId: "1:537741622326:web:d67593cebda47c14"
    });
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.setState({
          loggedIn: true
        });
      }else{
        this.setState({
          loggedIn: false
        });
      }
    });
  }
  render() {
    const main = this.state.loggedIn ? <Button>Logout</Button> : <Main /> 
    return (
      <View style={styles.container}>
        { main }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});
