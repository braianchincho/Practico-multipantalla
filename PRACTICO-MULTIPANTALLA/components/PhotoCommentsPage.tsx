import * as React from 'react';
import { View } from 'react-native';
import PhotoComentsComponent from './PhotoComentsComponent';
export interface PhotoCommentsPageProps {
    photoId: string
}
 
export interface PhotoCommentsPageState {
    
}
 
class PhotoCommentsPage extends React.Component<PhotoCommentsPageProps, PhotoCommentsPageState> {
    state = {}
    render() { 
        return ( 
            <PhotoComentsComponent photoId={this.props.photoId}/>
         );
    }
}
 
export default PhotoCommentsPage;