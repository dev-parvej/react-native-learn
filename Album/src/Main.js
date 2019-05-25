import React from 'react'
import Header from './components/Header'
import AppBody from './components/AppBody'

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header title="Album" />
                <AppBody />
            </React.Fragment>
        );
    }
}

export default Main;