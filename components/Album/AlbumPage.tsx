import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumItem from './AlbumItem';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import SpinnerPage from '../shared/SpinnerPage';
export interface AlbumPageProps {
    
}
 
export interface AlbumPageState {
    photoset: any,
    iconAlbum: any,
    loading: boolean
}
 
class AlbumPage extends React.Component<AlbumPageProps, AlbumPageState> {
    state: AlbumPageState = { 
        photoset: null,
        iconAlbum: <Icon name="folder-open" />,
        loading: false
     }

    componentWillMount() {
        if(!this.state.photoset) {
            this.getAlbumList();    
        }
        
    }

    getAlbumList() {
        const apiKey = '6e8a597cb502b7b95dbd46a46e25db8d';
        const usrId = '31804708@N02'; 
        const base = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList';
        const url = `${base}&api_key=${apiKey}&user_id=${usrId}&format=json&nojsoncallback=1&page=1&per_page=20`;

        this.setState({loading: true});
        axios.get(url).then(response => {
            this.setState({ 
                photoset: response.data.photosets.photoset,
                loading: false
            })
        }).catch(err => this.setState({loading: true}));
   
   
    }

    render() { 
        const { photoset, iconAlbum, loading } = this.state;

        if(loading) return (<SpinnerPage message="Cargando.."/>);

        if(!photoset) return null; 
        
        return ( 
            <View style={styles.container}>
                 <ScrollView>
                    { photoset.map( album =>  (
                        <AlbumItem 
                            album={album}
                            iconAlbum={iconAlbum}
                            key={album.id}
                        />
                    ) ) }
                 </ScrollView>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });
  
 
export default AlbumPage;