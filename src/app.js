import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Button, SpinnerComp } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBj80x5oUWBFkBZEBJ3y3ra5SuapOKuFMQ",
            authDomain: "auth-7fbea.firebaseapp.com",
            databaseURL: "https://auth-7fbea.firebaseio.com",
            storageBucket: "auth-7fbea.appspot.com",
            messagingSenderId: "327804905241"
        });

        firebase.auth().onAuthStateChanged((user) => { 
            if (user) {
                this.setState({ loggedIn : true });
            } else {
                this.setState({ loggedIn : false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return( <CardSection>
                            <Button 
                                buttonText='Log Out' 
                                onPress = {this.onLogoutPress}
                                />
                        </CardSection>
                );
            case false: 
                return <LoginForm />;
            default:
                return <SpinnerComp size='large' />;
        }

        
    }

    onLogoutPress() {
        console.log ('logging out');
        firebase.auth().signOut();
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                { this.renderContent() }
            </View>
        );
    }
}

export default App;