import React from 'react'
import { 
    UIManager,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    Platform
} from 'react-native'
import { Card, CardSection } from './../../components'
import { connect } from 'react-redux'
import * as actions from './../../store/actions'

class Item extends React.Component {   
    componentWillUpdate(){
        Platform.OS === 'android' ? 
            UIManager.setLayoutAnimationEnabledExperimental && 
            UIManager.setLayoutAnimationEnabledExperimental(true) : ''
        LayoutAnimation.spring();
    }
    render(){
        const { library, selectLibrary, expanded } = this.props
        const description = expanded ? <CardSection><Text>{ library.description }</Text></CardSection> : null;
        return (
            <Card>
                <CardSection>
                    <TouchableWithoutFeedback onPress={ () => selectLibrary(library.id) }>
                        <Text style={ styles.titleStyle } > { library.title } </Text>
                    </TouchableWithoutFeedback>
                </CardSection>
                { description }
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: { 
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
        alignItems: 'center'
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
} 

const mapActionToProps = dispatch => {
    return {
        selectLibrary: (id) => dispatch( actions.selectedLibrary(id) )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Item);