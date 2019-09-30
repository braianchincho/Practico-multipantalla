import * as React from 'react';
import { View, Linking } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import PhotoComentsComponent from './PhotoComentsComponent';
export interface PhotoTileActionsProps {
    urlImage: string,
    photoId: string

}
 
export interface PhotoTileActionsState {
    
}
 
class PhotoTileActions extends React.Component<PhotoTileActionsProps, PhotoTileActionsState> {
    state = {  }
    render() { 
        const { urlImage , photoId } = this.props;
        return (
            <View>
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View style={{height: 80 , width: '65%' }}>
                        <Icon style={{marginRight: 55}}
                        onPress={() => Linking.openURL(urlImage)}
                        name="add-a-photo" size={30} color="#900" />
                    </View>

                    <View style={ { width: '35%', height: 80} }>
                        <Icon style={{marginRight: 55}} name="comment" size={30} color="#900" />
                    </View>
                </View>
                <View style={{marginTop:40 ,height:'100%'}}>
                    <PhotoComentsComponent photoId={photoId}/>
                </View>
            </View>
       
        );
    }
}
 
export default PhotoTileActions;