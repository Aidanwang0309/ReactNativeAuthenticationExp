import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App  extends Component {
    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDoE6NQ-HxFPASV-nWydGU_v-nS0jt7pfs",
            authDomain: "authtest-fa7b4.firebaseapp.com",
            databaseURL: "https://authtest-fa7b4.firebaseio.com",
            projectId: "authtest-fa7b4",
            storageBucket: "authtest-fa7b4.appspot.com",
            messagingSenderId: "1048338526333"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent(){
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>;
        }
    }

  render(){
    return (
        <View>
            <Header headerText="Authentication"/>
            {this.renderContent()}
        </View>
    );
  }
}

export default App;