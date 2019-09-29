import * as React from 'react';
import { Tile, Button } from 'react-native-elements';
import { View, Text, Linking } from 'react-native';
import PhotoTileActions from './PhotoTileActions';
export interface PhotoTileProps {
    urlImage: string,
    title: string,
    id: string

}
 
export interface PhotoTileState {
    
}
 
class PhotoTile extends React.Component<PhotoTileProps, PhotoTileState> {
    state = {}
    render() { 
        const  { urlImage, title, id } = this.props;
        return ( 
            <Tile
                imageSrc={{uri: urlImage}}
                title={title}
            >
                <PhotoTileActions urlImage={urlImage} photoId={id}/>
            </Tile>
         );
    }
}
 
export default PhotoTile;