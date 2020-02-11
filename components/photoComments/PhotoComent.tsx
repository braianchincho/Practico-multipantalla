import * as React from 'react';
import { ListItem } from 'react-native-elements';
import { Dimensions, View, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';
  //leftAvatar={{ source: { uri: l.avatar_url } }}
const PhotoComment = ({comment,index}) => {    
    const urlImageUser = `https://live.staticflickr.com/${comment.iconserver}/buddyicons/${comment.author}.jpg?${comment.datecreate}#${comment.author}`
    return (
        <View style = {styles.container}>
            <ListItem
                key={index}
                leftAvatar={{ source: { uri: urlImageUser } }}
                title={comment.authorname}
            />
            <View style={styles.commentTextContainer}>
                <HTML html={comment._content} imagesMaxWidth={Dimensions.get('window').width} />
            </View>
        </View>
      
    );
};

export default PhotoComment;

const styles = StyleSheet.create({
    container: {
      borderBottomStartRadius: 4,
      borderBottomWidth: 0.5,
      borderBottomColor: '#d6d7da',
      marginTop: 5
    },
    commentTextContainer: {
        marginLeft: 10, 
        marginRight: 10,
        marginBottom: 10
    }
  });