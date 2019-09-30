import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumItem from './AlbumItem';
import { StyleSheet } from 'react-native';
export interface AlbumPageProps {
    
}
 
export interface AlbumPageState {
    photoset: any
}
 
class AlbumPage extends React.Component<AlbumPageProps, AlbumPageState> {
    state: AlbumPageState = { photoset: null }

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

        axios.get(url).then(response => {
            this.setState({ photoset: response.data.photosets.photoset })
        });
   
   
    }

    render() { 
        const { photoset } = this.state;
        if(!photoset) return null; 
        
        return ( 
            <View style={styles.container}>
                 <ScrollView>
                    { photoset.map( photo =>  (
                        <AlbumItem 
                            photo={photo}
                            key={photo.id}
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