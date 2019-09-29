import * as React from 'react';
import { ListItem } from 'react-native-elements';
  //leftAvatar={{ source: { uri: l.avatar_url } }}
const PhotoComment = ({comment,index}) => {
    console.log(comment)
    return (
        <ListItem
            key={index}
            leftAvatar={{ source: { uri: 'https://live.staticflickr.com/3939/buddyicons/128449652@N03.jpg?1415588456#128449652@N03' } }}
            title={comment.authorname}
            subtitle={comment._content}
            bottomDivider
        />
    );
};

export default PhotoComment;