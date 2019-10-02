import * as React from 'react';
import { Tile, Button } from 'react-native-elements';
import { View, Text, Linking, ImageBackground } from 'react-native';
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
            <View style={{backgroundColor:'#fff'}}>    
                <View style={{height:'85%'}}>
                    <ImageBackground source={{uri: urlImage}} style={{width: '100%', height: '100%'}}/>
                </View>    
                <View style= {{height:'15%'}}>
                    <PhotoTileActions urlImage={urlImage} photoId={photoId} />     
                </View>
            </View>

         );
    }
}
 
export default PhotoTile;