import * as React from 'react';
import { View, Linking } from 'react-native';
import { Button, Text } from 'react-native-elements';
export interface PhotoTileActionsProps {
    urlImage: string,
    photoId: string

}
 
export interface PhotoTileActionsState {
    
}
 
class PhotoTileActions extends React.Component<PhotoTileActionsProps, PhotoTileActionsState> {
    state = {  }
    render() { 
        const { urlImage } = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'row', height: '100%' }}>
                <View>
                    <Button
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Ver ahora!' 
                        onPress={() => Linking.openURL(urlImage)}
                    />
                </View>
                <View style={ { width: '65%'} }>
                    <Text style={ { width: '100%' , textAlign: 'right'  } }>Comentarios</Text>
                </View>
            </View>
        );
    }
}
 
export default PhotoTileActions;