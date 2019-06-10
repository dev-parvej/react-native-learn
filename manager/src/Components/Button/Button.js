import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native'

const Button = ({ children, pressed, loader }) => {
    const text = <Text  style={ styles.textStyle }  > { children } </Text>
    const disabled = loader ? true : false;
    const spinner = loader ? <ActivityIndicator size="small" color="#00ff00" /> : '';
    return(
        <TouchableOpacity 
            style={ styles.buttonStyles } 
            disabled={ disabled } 
            onPress={ pressed }
        >
            { loader ? spinner : text}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: { 
        textAlign: "center", 
        fontSize: 16, 
        color: '#007aff',
        fontWeight: '600'
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        padding: 7
    }
});

export { Button };