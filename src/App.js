import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App  extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDoE6NQ-HxFPASV-nWydGU_v-nS0jt7pfs",
            authDomain: "authtest-fa7b4.firebaseapp.com",
            databaseURL: "https://authtest-fa7b4.firebaseio.com",
            projectId: "authtest-fa7b4",
            storageBucket: "authtest-fa7b4.appspot.com",
            messagingSenderId: "1048338526333"
        });
    }

  render(){
    return (
        <View>
            <Header headerText="Authentication"/>
            <LoginForm />
        </View>
    );
  }
}

export default App;