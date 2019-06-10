import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Header } from './Components'
import LoginForm from './Views/Account/LoginForm'

class Main extends React.Component{
    render(){
        const { authenticate } = this.props
        const loginForm = !authenticate ? <LoginForm /> : null
        return(
            <View>
                <Header title="Manager" /> 
                { loginForm }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticate: state.auth.authenticate
    }
}

export default connect( mapStateToProps )(Main)