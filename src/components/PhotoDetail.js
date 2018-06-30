import React from 'react';
import { Text, View, Image, Linking ,ScrollView} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import CommentList from './CommentList';

const PhotoDetail = ({key, title, imageUrl,photoId}) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

 

  return (
    <ScrollView>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: imageUrl }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>
         Ver ahora!
        </Button>
      </CardSection>
      <CardSection>
         <Text style = {{color:"#27e2f1", fontSize:25}}>Comentarios</Text>
      </CardSection>
      <CardSection>
         <CommentList photoId={photoId}/>
      </CardSection>
    </ScrollView>
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

export default PhotoDetail;
