import * as React from 'react';
import { ListItem } from 'react-native-elements';
  //leftAvatar={{ source: { uri: l.avatar_url } }}
const PhotoComment = ({comment,index}) => {
    console.log(comment)
    
    const urlImageUser = `https://live.staticflickr.com/${comment.iconserver}/buddyicons/${comment.author}.jpg?${comment.datecreate}#${comment.author}`
    return (
        <ListItem
            key={index}
            leftAvatar={{ source: { uri: urlImageUser } }}
            title={comment.authorname}
            subtitle={comment._content}
            bottomDivider
        />
    );
};

export default PhotoComment;