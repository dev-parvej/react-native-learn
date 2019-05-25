import React from 'react'
import { View, StyleSheet } from 'react-native'
import Albums from './Album/AlbumList'

class AppBody extends React.Component{
    render(){
        return(
            <View style={  styles.App }>
                <Albums /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    App: {
        fontSize: 16
    }
});

export default AppBody;