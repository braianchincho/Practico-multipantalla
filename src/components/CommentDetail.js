import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const CommentDetail = ({ userName, content }) => {
  const {
    headerContentStyle,
    
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
    
          <Text style={headerTextStyle}>{userName}</Text>
          <Text >{content}</Text>
        
      </CardSection>


    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default CommentDetail;