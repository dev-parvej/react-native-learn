import React from 'react'
import { View } from 'react-native'
import { Header } from './Components'
import LoginForm from './Views/Account/LoginForm'

class Main extends React.Component{
    render(){
        return(
            <View>
                <Header title="Manager" /> 
                <LoginForm />
            </View>
        )
    }
}

export default Main