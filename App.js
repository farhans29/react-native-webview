
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  body : {
    paddingTop:100,
  }
})

const App = () => {
    return (
      <WebView source={{ uri: 'https://video.farhans.my.id/' }} style={{marginTop: 20}} />
      )

}
export default App;