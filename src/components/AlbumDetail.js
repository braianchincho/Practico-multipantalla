import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const AlbumDetail = ({ title, albumId }) => {
  const {
    headerContentStyle,
    
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card >
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Actions.photoList({albumId:albumId})}>
         <Text > Ver ahora!</Text>
        </Button>
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
    fontSize: 18,
   
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

export default AlbumDetail;
