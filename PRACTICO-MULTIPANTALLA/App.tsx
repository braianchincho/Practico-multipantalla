import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import AlbumPage from './components/AlbumPage';

export default function App() {
  return (
    <Router>
      <Scene key = "root">
         <Scene key = "home" component = {AlbumPage} title = "Home" initial = {true} />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
