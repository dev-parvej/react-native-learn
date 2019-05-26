import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return(
        <View style={ styles.containerStyle }>
            <Text style={ styles.labelStyle }>{ props.label }</Text>
            <TextInput 
                onChangeText={ props.changed } 
                value={ props.value } 
                style={ styles.inputStyle }
                autocorrect= { false }
                placeholder={ props.placeholder }
                secureTextEntry={props.password}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,

    },
    labelStyle: {
        color: '#000',
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    containerStyle:{
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };