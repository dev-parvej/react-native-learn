import React from 'react'
import { View, StyleSheet } from 'react-native'

const card = (props) => {
    return(
        <View style={ styles.card }>
            { props.children }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderRadius: 2,
        borderColor: "#969394",
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation: 1
    }
});
export default card;