import * as React from 'react';
import { Text } from 'react-native';
import {  ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
export interface AlbumItemProps {
    photo: any
}
 
export interface AlbumItemState {
    
}
 
class AlbumItem extends React.Component<AlbumItemProps, AlbumItemState> {
    state = {  };
    render() { 
        const { photo } = this.props;
        const icon = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

        if(!photo) return <Text>...Cargando</Text>; 

        return ( 
            <ListItem
                key={photo.id}
                title={photo.title._content}
                leftAvatar={{ source: { uri: icon } }}
                bottomDivider
                chevron
                onPress={() => Actions.fotos({albumId: photo.id})}
            />
        );
    }
}
 
export default AlbumItem;
