import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';

import HackerNews from './HackerNews';

export default class App extends Component {

  render() {
    return (
     <View>
      <HackerNews />

     </View>
    );
  }
}

AppRegistry.registerComponent('ReactJsChallenge', ()=>App);