import React from 'react'
import axios from 'axios'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Album from './Component/Album'

class AlbumList extends React.Component{
    state = {
        albums: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=2').then(response => {
            this.setState({
                albums: response.data
            });
        });
    }
    render(){
        const albums = this.state.albums.length > 0 ?
        this.state.albums.map(album => <Album key={album.id} album={album} />) : 
        <Text>Loading...</Text>
        return(
            <ScrollView style={ styles.Albums }>
                {albums}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Albums: {
        overflow: 'scroll'
    }
});

export default AlbumList;