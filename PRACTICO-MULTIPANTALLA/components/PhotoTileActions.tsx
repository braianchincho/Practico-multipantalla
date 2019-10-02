import * as React from 'react';
import { View, Linking } from 'react-native';
import { Icon , Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
export interface PhotoTileActionsProps {
    urlImage: string,
    photoId: string

}
 
export interface PhotoTileActionsState {
    
}
 
class PhotoTileActions extends React.Component<PhotoTileActionsProps, PhotoTileActionsState> {
    state = {  }
    goToComentarios = () => {
        console.log('ir a comentarios');
        Actions.comentarios({photoId:this.props.photoId});
    }
    render() { 
        const { urlImage , photoId } = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'row' , backgroundColor:'#FFF'}}>
                <View style={{width: '20%'}}>
                    <Icon
                        onPress={() => Linking.openURL(urlImage)}
                        name="add-a-photo" size={30} color="#900"
                        reverse={true} />
                </View>
                <View style={{ width: '60%' }}/>
                <View style={{width: '20%'} }>
                    <Icon
                        onPress={() => this.goToComentarios()}
                        name="comment" size={30} color="#900"
                        reverse={true} />
                </View>
            </View>
       
        );
    }
}
 
export default PhotoTileActions;