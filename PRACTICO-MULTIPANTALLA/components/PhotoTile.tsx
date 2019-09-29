import * as React from 'react';
import { Tile, Button } from 'react-native-elements';
import { View, Text, Linking } from 'react-native';
import PhotoTileActions from './PhotoTileActions';
export interface PhotoTileProps {
    urlImage: string,
    title: string,
    photoId: string

}
 
export interface PhotoTileState {
    
}
 
class PhotoTile extends React.Component<PhotoTileProps, PhotoTileState> {
    state = {}
    render() { 
        const  { urlImage, title, photoId } = this.props;
        return ( 
            <View>
                <Tile
                    imageSrc={{uri: urlImage}}
                    title={title}
                 />
                <PhotoTileActions urlImage={urlImage} photoId={photoId}/>
            </View>

         );
    }
}
 
export default PhotoTile;