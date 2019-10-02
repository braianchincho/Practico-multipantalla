import * as React from 'react';
import { ListItem } from 'react-native-elements';
import { Dimensions, View } from 'react-native';
import HTML from 'react-native-render-html';
  //leftAvatar={{ source: { uri: l.avatar_url } }}
const PhotoComment = ({comment,index}) => {    
    const urlImageUser = `https://live.staticflickr.com/${comment.iconserver}/buddyicons/${comment.author}.jpg?${comment.datecreate}#${comment.author}`
    return (
        <View style = {{ borderBottomColor:'#ededed' }}>
            <ListItem
                key={index}
                leftAvatar={{ source: { uri: urlImageUser } }}
                title={comment.authorname}
            />
            <View style={{marginLeft:10 , marginRight:10}}>
                <HTML html={comment._content} imagesMaxWidth={Dimensions.get('window').width} />
            </View>
        </View>
      
    );
};

export default PhotoComment;