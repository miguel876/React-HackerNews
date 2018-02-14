import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, ListView, ActivityIndicator} from 'react-native';

export default class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
   
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
  return (
    <View>
   
  </View>
    );
  }
}
AppRegistry.registerComponent('ReactJsChallenge', ()=>Login);