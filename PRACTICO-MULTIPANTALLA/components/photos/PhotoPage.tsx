import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import axios from 'axios';
import PhotoItem from './PhotoItem';
import SpinnerPage from '../shared/SpinnerPage';
export interface PhotoPageProps {
    albumId: string
}
 
export interface PhotoPageState {
    photos: any[],
    loading: boolean
}
 
class PhotoPage extends React.Component<PhotoPageProps, PhotoPageState> {
    state = { 
        photos: [],
        loading: false
    }
    componentWillMount() {
        this.getFotos();
    }
    getFotos(): void {
        const apiKey = '6e8a597cb502b7b95dbd46a46e25db8d';
        const usrId = '31804708@N02'; 
        const base = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
        const url = `${base}&api_key=${apiKey}&user_id=${usrId}&photoset_id=${this.props.albumId}&format=json&nojsoncallback=1&page=1&per_page=20`;
        this.setState({loading: true});
        axios.get(url).then(response => {
            this.setState({ 
                photos: response.data.photoset.photo,
                loading: false
             })
        }).catch(err => this.setState({ loading: false , photos: [] }));
    }
    render() { 
        const { photos , loading } = this.state;
        if(loading) return (<SpinnerPage message="Cargando..."/>);

        if(!photos || photos.length === 0) return this.dontHavePhoto();

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
    dontHavePhoto() {
        return (
         <View style={{flex:1 , backgroundColor: '#fff'}}>
             <Text style={{ textAlign: 'center', marginTop: 15}}>
                 No se encontraron fotos
            </Text>
         </View>
        );
    }
}
 
export default PhotoPage;