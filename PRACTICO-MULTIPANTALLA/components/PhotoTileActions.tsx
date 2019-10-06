import * as React from 'react';
import { View, Linking } from 'react-native';
import { Icon , Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
export interface PhotoTileActionsProps {
    urlImage: string,
    photoId: string
}
 
export interface PhotoTileActionsState {}

const iconColor= "#91D5D0"

class PhotoTileActions extends React.Component<PhotoTileActionsProps, PhotoTileActionsState> {
    state = {  }
    goToComentarios = (photoId) => {
        console.log('ir a comentarios');
        Actions.comentarios({photoId: photoId});
    }
    render() { 
        const { urlImage , photoId } = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'row' , backgroundColor:'#EFF0F0'}}>
                <View style={{width: '20%'}}>
                    <Icon
                        onPress={() => Linking.openURL(urlImage)}
                        name="add-a-photo" size={25} color={iconColor}
                        reverse={true} />
                </View>
                <View style={{ width: '60%' }}/>
                <View style={{width: '20%'} }>
                    <Icon
                        onPress={() => this.goToComentarios(photoId)}
                        name="comment" size={25} color={iconColor}
                        reverse={true} />
                </View>
            </View>
       
        );
    }
}
 
export default PhotoTileActions;