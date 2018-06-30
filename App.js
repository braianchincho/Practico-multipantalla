import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import { Router, Scene } from 'react-native-router-flux';
import PhotoDetail from './src/components/PhotoDetail';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="albumList" component={AlbumList} title="Albums" initial={true} />
      <Scene key="photoList" component={PhotoList} title="Fotos" />
      <Scene key="photoDetail" component={PhotoDetail} title="Foto" />
    </Scene>
  </Router>
);

export default App;

AppRegistry.registerComponent('albums', () => App);

  