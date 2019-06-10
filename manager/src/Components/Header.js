import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Header extends React.Component{
    render(){
        return(
            <View style={ styles.header }>
                <Text style={ styles.title }>{ this.props.title }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6'
    },
    title: {
        fontSize: 20,
        padding: 10
    }
});

export { Header };