import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import AlbumPage from './components/AlbumPage';
import PhotoPage from './components/PhotoPage';
import PhotoTile from './components/PhotoTile';

export default function App() {
  return (
    <Router>
      <Scene key = "root">
         <Scene key = "home"  component = {AlbumPage} title = "Home" initial = {true} />
         <Scene key = "fotos" component = {PhotoPage} title = "Fotos" initial = {false} />
         <Scene key = "foto" component = {PhotoTile} title = "Foto" initial = {false} />
      </Scene>
    </Router>
  );
}

