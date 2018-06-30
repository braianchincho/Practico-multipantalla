import React, { Component } from 'react';
import { ScrollView, Text, View , FlatList, ActivityIndicator, StyleSheet,Linking } from 'react-native';
import axios from 'axios';
import CommentDetail from './CommentDetail';
import { List, ListItem, SearchBar } from "react-native-elements";

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {comments:null};
    
      
      }
  

  componentWillMount() {
    var url =`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=bf8f6eb6d8864de3bcac43bbf25ecc1e&photo_id=${this.props.photoId}&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(response => response.data.stat != 'fail' ? 
      this.setState({ comments: response.data.comments.comment }) : 
      console.log('no hay comentarios')
      );
      console.log(this.state.comments);
      console.log(url);
}

  renderComments() {
   
       var t= this.state.comments.map(comment =>
        <CommentDetail key={comment.id} userName={comment.authorname} content={comment._content} />
      );
      
      return t;
 
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
        <FlatList
            data={this.state.comments}
            renderItem={({item}) => {return (
            <ListItem
                // roundAvatar
                title={item.authorname}
                
                // avatar={{ uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}}
                
                subtitle = {item._content}
                        
                         
                      
              
              
             />//fin list item
                 
               );
             }}
             keyExtractor={item => item.id}

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

export default CommentList;
