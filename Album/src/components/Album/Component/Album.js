import React from 'react'
import { Text, View, Image, StyleSheet, Linking } from 'react-native'
import Card from '../../card/card'
import CardSection from '../../card/cardSection'
import Button from '../../Button/Button'

class Album extends React.Component{
    buyAlbum = (url) => {
        Linking.openURL(url)
    }
    render(){
        const { title, thumbnailUrl, url, id } = this.props.album;
        return(
            <Card>
                <CardSection>
                    <View style={ { marginRight: 5 } }>
                        <Image source={{ uri: thumbnailUrl }} style={ styles.thumbnailStyle } />
                    </View>
                    <View style={ styles.AlbumHeader }>
                        <Text style={ styles.AlbumTitle } >Title: { title.substr(0, 20) }</Text>
                        <Text>Name: Akash</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image source={ { uri: thumbnailUrl } } style={ styles.imageStyle } />
                </CardSection>
                <CardSection>
                    <Button pressed={ () => this.buyAlbum(url) }>Buy now</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    AlbumHeader: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 60,
        width: 60
    },
    AlbumTitle:{
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

});

export default Album;