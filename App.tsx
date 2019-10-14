import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import AlbumPage from './components/Album/AlbumPage';
import PhotoPage from './components/photos/PhotoPage';
import PhotoTile from './components/photos/PhotoTile';
import PhotoCommentsPage from './components/photoComments/PhotoCommentsPage';

export default function App() {
  return (
      <Router>
          <Scene key = "root">
              <Scene key = "home"  component = {AlbumPage} title = "Home" initial = {true} />
              <Scene key = "fotos" component = {PhotoPage} title = "Fotos" initial = {false} />
              <Scene key = "foto" component = {PhotoTile} title = "Foto" initial = {false} />
              <Scene key = "comentarios" component = {PhotoCommentsPage} title = "Comentarios" initial = {false} />
          </Scene>
      </Router>
  );
}

