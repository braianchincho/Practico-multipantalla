import * as React from 'react';
import { Text } from 'react-native';
import {  ListItem, Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
export interface AlbumItemProps {
    album: any,
    iconAlbum: any
}
 
export interface AlbumItemState {
    
}
 
class AlbumItem extends React.Component<AlbumItemProps, AlbumItemState> {
    state = {  };
    render() { 
        const { album, iconAlbum } = this.props;
        if(!album) return <Text>...Cargando</Text>; 
       
        return ( 
            <ListItem
                key={album.id}
                title={album.title._content}
                leftAvatar={ iconAlbum }
                bottomDivider
                chevron
                onPress={() => Actions.fotos({albumId: album.id})}
            />
        );
    }
}
 
export default AlbumItem;
