import * as React from 'react';
import { View, ScrollView } from 'react-native';
import PhotoComment from './PhotoComent';
import { Text } from 'react-native-elements';
export interface PhotoComentsComponentProps {
    photoId: string
    comments: any[],
}
 
export interface PhotoComentsComponentState {
   
}
 
class PhotoComentsComponent extends React.Component<PhotoComentsComponentProps, PhotoComentsComponentState> {
    state = {}

    render() { 
        const { comments } = this.props;
 
        if(comments.length === 0 ) {
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <Text style={{textAlign: 'center' , marginTop:15, fontSize: 16}}>
                        No hay comentarios
                    </Text>
                </View>
            );
        }
        return ( 
          <View style={{flex:1,width: '100%', backgroundColor: '#fff'}}>
            <Text style={{textAlign: 'center' , marginBottom:10 , fontSize: 16}}>
                Comentarios
            </Text>
             <ScrollView>
                {
                    comments.map( (comment, index) => (
                        <PhotoComment comment={comment} index={index} key={comment.id}/>
                    ))
                }
             </ScrollView>
           </View>
         );
    }
}
 
export default PhotoComentsComponent;