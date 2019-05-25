import React from 'react'
import firebase from 'firebase'
import { View, ActivityIndicator } from 'react-native'
import { Card, CardSection, Button, Input, Message } from './../../../components'

class Login extends React.Component{
    state = {
        login: {
            email: '',
            password: ''
        },
        loading: false,
        error: '',
        success: ''
    }

    changeHandler = (value, index) => {
        let login = { ...this.state.login }
        login[index] = value;
        this.setState({
            login
        });
    }
    submitLogin = () => {
        this.resetMessage();
        const { email, password } = this.state.login;
        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            console.log(response);
            this.loginSuccess();
        }).catch(error => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(userResponse => {
                this.loginSuccess();
            }).catch(error => {
                this.loginFailed();
            });
        });

    }
    render(){
        const loader = this.state.loading ? 
            <ActivityIndicator size="small" color="#00ff00" /> 
            : '';
        return(
            <View>
                <Card>
                    <CardSection>
                        <Input 
                            label="Email: "
                            value={ this.state.login.email } 
                            changed={ email => this.changeHandler(email, 'email') }
                            placeholder="user@example.com"
                        /> 
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Password: "
                            value={ this.state.login.password } 
                            changed={ password => this.changeHandler(password, 'password') }
                            placeholder="password"
                            password
                        /> 
                    </CardSection>
                    <Message 
                        error={ this.state.error }
                        success={ this.state.success }
                    />
                    <CardSection>
                        <Button pressed={ this.submitLogin } loader={ loader } >
                           Login
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }

    loginSuccess = () => {
        this.setState({
            loading: false,
            error: '',
            success: 'Authintication successful'
        });
        this.resetForm();
    }

    resetMessage = () => {
        this.setState({
            loading: true,
            error: '',
            success: ''
        });
    }

    resetForm = () => {
        this.setState({
            login: {
                email: '',
                password: ''
            }
        });
    }

    loginFailed = () => {
        this.setState({
            loading: false,
            error: 'Authintication failed',
            success: ''
        });
    }

}

export default Login;