import React, { Component } from 'react';
import { Text } from 'react-native'
import { Card, Button , CardSection, TxtInput, SpinnerComp } from './common';
import firebase from 'firebase';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false};

    onLoginPress() {
        this.setState({ error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then ( this.onLoginSuccess.bind(this))
        .catch( () => {
            //if authentication failed, try creating an account
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then ( this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });

        
    }
    
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
         this.setState({ error: 'Sign in failed! Please enter valid credentials.' });
    }

    renderButton() {
        if (this.state.loading) {
            return <SpinnerComp size='small' />
        }
        return (
             <Button 
                buttonText='Log In' 
                onPress = {this.onLoginPress.bind(this)}
             />
        );

    }

    render(){
        return (
            <Card>
                
                <CardSection>
                    <TxtInput 
                        label = 'Email'
                        placeholder = 'user@gmail.com'
                        value = { this.state.email }
                        onChangeText = {emailEntered => this.setState({ email: emailEntered })}/>
                </CardSection>

                <CardSection>
                    <TxtInput
                        secureTextEntry
                        placeholder = "password"
                        label = 'Password'
                        value = { this.state.password }
                        onChangeText = {passwordEntered => this.setState({ password: passwordEntered })} />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    { this.state.error }
                </Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 16
    }
}

export default LoginForm;