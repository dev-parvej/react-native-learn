import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './Item'

class Libraries extends React.Component{
    renderItem(library) {
        return <ListItem library={ library } />
    }
    render(){    
        return (
            <FlatList 
                data={ this.props.libraries }
                renderItem={ library => this.renderItem(library.item) }
                keyExtractor={ library =>  `id${library.id}` }
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
} 

export default connect(mapStateToProps, null)(Libraries);