import * as React from 'react';
import { Text } from 'react-native-elements';
export interface PhotoItemProps {
    photo: any
}
 
export interface PhotoItemState {
    
}
 
class PhotoItem extends React.Component<PhotoItemProps, PhotoItemState> {
    state = { 
    }
    render() { 
        const photo = this.props.photo;
        return ( <Text>{photo.id}</Text> );
    }
}
 
export default PhotoItem;