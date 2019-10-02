import * as React from 'react';
import { View } from 'react-native';
import PhotoComentsComponent from './PhotoComentsComponent';
import axios from 'axios';
import { Text } from 'react-native-elements';
export interface PhotoCommentsPageProps {
    photoId: string
}
 
export interface PhotoCommentsPageState {
    comments: any[],
    loading
}
 
class PhotoCommentsPage extends React.Component<PhotoCommentsPageProps, PhotoCommentsPageState> {
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
    }
    render() { 
        const { comments , loading } = this.state;
        if(loading) {
            return (
                <View style={{backgroundColor:'#FFF', height:'100%'}}>
                    <Text style={{textAlign: 'center' , marginTop:15, fontSize: 16}}>
                        Cargando comentarios...
                    </Text>
                </View>
            ); 
        }
        return ( 
            <PhotoComentsComponent comments={comments} photoId={this.props.photoId}/>
         );
    }
}
 
export default PhotoCommentsPage;