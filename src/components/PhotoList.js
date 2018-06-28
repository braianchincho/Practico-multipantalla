import React, { Component } from 'react';
import { ScrollView, Text, View , FlatList, ActivityIndicator, StyleSheet,Linking } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import { List, ListItem, SearchBar } from "react-native-elements";

class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.albumId}&user_id=77182094@N02&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

  renderAlbums() {
    return this.state.photos;
  }

  render() {
    console.log(this.state);


    if (!this.state.photos) { 
			return (
          <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#0000ff" style={{flex: 3}} />
          </View>
				);
    }

    return (
        <View style={{ flex: 1 }}>
        <FlatList
               data={this.renderAlbums()}
               renderItem={({item}) => {return (
                <ListItem
                roundAvatar
                title={item.title}
                
                avatar={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}}
                Button onPress={() => Linking.openURL(`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`)}
              />

               );
             }}

           />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
    }
})

export default PhotoList;
