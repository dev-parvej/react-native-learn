import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const button = props => {
    return(
        <TouchableOpacity style={ styles.buttonStyles }>
            <Text 
                style={ styles.textStyle }
                onPress={ props.pressed }
            >
            { props.children }
            </Text>
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

export default button;