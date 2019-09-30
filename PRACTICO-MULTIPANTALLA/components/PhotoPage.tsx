import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import axios from 'axios';
import PhotoItem from './PhotoItem';
export interface PhotoPageProps {
    albumId: string
}
 
export interface PhotoPageState {
    photos: any[]
}
 
class PhotoPage extends React.Component<PhotoPageProps, PhotoPageState> {
    state = { photos: []}
    componentWillMount() {
        this.getFotos();
    }
    getFotos(): void {
        const apiKey = '6e8a597cb502b7b95dbd46a46e25db8d';
        const usrId = '31804708@N02'; 
        const base = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
        const url = `${base}&api_key=${apiKey}&user_id=${usrId}&photoset_id=${this.props.albumId}&format=json&nojsoncallback=1&page=1&per_page=20`;
        console.log(url)
        axios.get(url).then(response => {
           // console.log(response)
            this.setState({ photos: response.data.photoset.photo })
            //console.log(response.data.photoset)
        });
    }
    render() { 
        const { photos } = this.state;
        if(!photos || photos.length === 0) return (
        <View style={{flex:1 , backgroundColor: '#fff'}}>
             <Text style={{textAlign:'center',backgroundColor:'#fff', fontSize:16}}>
                 Cargando...
            </Text>
        </View>)
        return (  
            <View style={{flex:1 , backgroundColor: '#fff'}}>
                 <ScrollView> 
                    {
                        photos.map( photo => (
                            <PhotoItem photo={photo} key={photo.id} />
                        ))
                    }
                 </ScrollView>
            </View>
        );
    }
}
 
export default PhotoPage;