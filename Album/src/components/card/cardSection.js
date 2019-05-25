import React from 'react'
import { View, StyleSheet } from 'react-native'

const cardSection = props => {
    return (
        <View style={ styles.cardSection }>{ props.children }</View>
    );
}

const styles = StyleSheet.create({
    cardSection: {
        borderBottomWidth: .5,
        padding: 5,
        marginRight: 5,
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        borderColor: '#969394'
    }
});

export default cardSection;