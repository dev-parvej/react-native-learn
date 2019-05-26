import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import Login from './views/Login/Login'
import firebase from 'firebase'

class Main extends React.Component{
    state = {
        loggedIn: false
      }
    render(){
        const page = this.state.loggedIn ? <Button>Logout</Button> : <Login />
        return(
            <View>
                <Header title="Login" />
                { page }
            </View>
        )
    }
}

export default Main;