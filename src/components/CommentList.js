import React, { Component } from 'react';
import { ScrollView, Text, View , FlatList, ActivityIndicator, StyleSheet,Linking } from 'react-native';
import axios from 'axios';
import CommentDetail from './CommentDetail';


class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {comments:null};
    
      
      }
  

  componentWillMount() {
    var url =`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=cc99e0b1479c21ed88391f752e09eca4&photo_id=${this.props.photoId}&min_comment_date=3&format=json&nojsoncallback=1&api_sig=de9c5a74b8ada9593e937a485237a4e3`;
    axios.get(url)
      .then(response => response.data.stat == 'ok' ? 
      this.setState({ comments: response.data.comments.comment }) : 
      console.log('no hay comentarios')
      );
      console.log(this.state.comments);
     console.log(url);
}

  renderCommets() {
      if(this.state.comments.stat == 'ok'){
                    return this.state.comments.map(comment =>
        <CommentDetail key={comment.id} userName={comment.authorname} content={comment._content} />
      );
    }else{return null;}
  }
  
 

  render() {
    console.log(this.state);


    if (!this.state.comments) { 
			return (
          <View style={[styles.container, styles.horizontal]}>
              <Text>Sin comentarios</Text>
          </View>
				);
    }

    return (
    <View style={{ flex: 1 }}>
        <ScrollView>{this.renderCommets()}</ScrollView>
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

export default CommentList;
