import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { CardSection } from '../index'

const Message = props => {
    const messageHtml = (props.error || props.success) ? 
            (
                <CardSection>
                    <Text style={ styles.errorStyle }>
                        { props.error }
                    </Text>
                    <Text style={ styles.successStyle }>
                        { props.success }
                    </Text>
                </CardSection>
            )    
        : null;
    return (
        <React.Fragment>
            { messageHtml }
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    },
    successStyle: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center'
    }
});

export { Message };