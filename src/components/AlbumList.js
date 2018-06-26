import React, { Component } from 'react';
import { ScrollView, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=159173285@N03&format=json&nojsoncallback=1')
      .then(response => this.setState({ photoset: response.data.photosets.photoset }));
  }

  renderAlbums() {
    return this.state.photoset.map(album =>
      <AlbumDetail key={album.id} title={album.title._content}  albumId={album.id}  />
    );
  }

  render() {
    console.log(this.state);


    if (!this.state.photoset) { 
			return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
				);
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
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

export default AlbumList;
