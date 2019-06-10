import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from './../../Store/actions/auth'
import { Input, Card, CardSection, Button } from './../../Components'

class LoginForm extends React.Component{
    render(){
        console.log(this.props);
        return(
            <View>
                <Card>
                    <CardSection>
                        <Input 
                            label="Email" 
                            placeholder="example@example.com"
                            value={ this.props.email }
                            changed={ email => this.props.setEmail(email) }
                        /> 
                    </CardSection>
                    <CardSection>
                        <Input 
                            label="Password" 
                            placeholder="Password"
                            password
                            value={ this.props.password }
                            changed={ password => this.props.setPassword(password) }
                        />
                    </CardSection>
                    <CardSection>
                        <Button loader={ this.props.loader }
                            pressed={this.props.login}
                            >Login</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loader: state.auth.loader
    }
}

const mapActionToProps = dispatch => {
    return {
        setEmail: email => dispatch(actions.setEmail(email)),
        setPassword: password => dispatch(actions.setPassword(password)),
        login: () => dispatch(actions.login())
    }
}
export default connect(mapStateToProps, mapActionToProps)(LoginForm);