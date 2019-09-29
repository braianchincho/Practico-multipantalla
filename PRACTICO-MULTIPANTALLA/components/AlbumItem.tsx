import * as React from 'react';
import { Text } from 'react-native';
import {  ListItem } from 'react-native-elements'
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
        console.log(icon)
        return ( 
            <ListItem
                key={photo.id}
                title={photo.title._content}
                leftAvatar={{ source: { uri: icon } }}
                bottomDivider
                chevron
            />
        );
    }
}
 
export default AlbumItem;