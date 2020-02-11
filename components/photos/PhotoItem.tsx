import * as React from 'react';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
export interface PhotoItemProps {
    photo: any
}
 
export interface PhotoItemState {
    
}
 
class PhotoItem extends React.Component<PhotoItemProps, PhotoItemState> {
    state = { 
    }
    render() { 
        const { farm , server , id , secret, title  } = this.props.photo;
        const urlImage = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        //  icon={<Icon name='code' color='#ffffff' />}
        return (
            <Card
                title= {title}
                image={{uri: urlImage}}>
                <Button
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Ver ahora!' 
                    onPress={() => Actions.foto({ urlImage , title , photoId: id } )}
                />
            </Card>
        );
    }
}
 
export default PhotoItem;