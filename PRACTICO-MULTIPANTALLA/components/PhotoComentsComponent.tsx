import * as React from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoComment from './PhotoComent';
import { Text } from 'react-native-elements';
export interface PhotoComentsComponentProps {
    photoId: string
}
 
export interface PhotoComentsComponentState {
    comments: any[],
    loading
}
 
class PhotoComentsComponent extends React.Component<PhotoComentsComponentProps, PhotoComentsComponentState> {
    state = { comments:[] , loading: false}
    componentWillMount() {
        const urlBase =`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList`;
        const apiKey = '6e8a597cb502b7b95dbd46a46e25db8d';
        const format = 'format=json&nojsoncallback=1&page=1&per_page=20';
        const url = `${urlBase}&api_key=${apiKey}&photo_id=${this.props.photoId}&${format}`;
        this.setState({loading:true})
        axios.get(url)
            .then(response => {
                this.setState({ comments: response.data.comments.comment , loading:false }) 
            }
        ).catch(err => this.setState({ comments: [] , loading:false }) );
        console.log('comment', url)
    }
    render() { 
        const { comments } = this.state;
        if(this.state.loading) {
            return (
                <Text style={{textAlign: 'center' , marginTop:15, fontSize: 16}}>
                    Cargando comantarios...
                </Text>
            ); 
        }
        if(comments.length === 0 ) {
            return (
                <Text style={{textAlign: 'center' , marginTop:15, fontSize: 16}}>
                   No hay comentarios
                </Text>
            );
        }
        return ( 
          <View style={{flex:1,width: '100%', backgroundColor: '#fff'}}>
            <Text style={{textAlign: 'center' , marginBottom:10 , fontSize: 16}}>
                Comentarios
            </Text>
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