import * as React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoComment from './PhotoComent';
export interface PhotoComentsComponentProps {
    photoId: string
}
 
export interface PhotoComentsComponentState {
    comments: any[]
}
 
class PhotoComentsComponent extends React.Component<PhotoComentsComponentProps, PhotoComentsComponentState> {
    state = { comments:[]}
    componentWillMount() {
        const urlBase =`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList`;
        const apiKey = '6e8a597cb502b7b95dbd46a46e25db8d';
        const format = 'format=json&nojsoncallback=1&page=1&per_page=20';
        const url = `${urlBase}&api_key=${apiKey}&photo_id=${this.props.photoId}&${format}`;
        axios.get(url)
            .then(response => {
              if(response.data.stat != 'fail') {
                this.setState({ comments: response.data.comments.comment }) 
              }
            }
        );
        console.log('comment', url)
    }
    render() { 
        const { comments } = this.state;
        return ( 
          <View style={{flex:1,width: '100%'}}>
             <ScrollView>
                {
                    comments.map( (comment, index) => (
                        <PhotoComment comment={comment} index={index} key={comment.id}/>
                    ))
                }
             </ScrollView>
           </View>
         );
    }
}
 
export default PhotoComentsComponent;