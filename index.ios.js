/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

/*
 All of the core components accept a prop named style.
 The style names and values usually match how CSS works on the web,
 except names are written using camel casing, e.g backgroundColor rather than background-color.

 As a component grows in complexity, it is often cleaner to use StyleSheet.create to define several styles in one place.
 */

export default class BlinkApp extends Component{
  render(){
    return(
        <View style={{paddingTop: 24,width: 100,height: 100,flexDirection: 'row'}}>
          <View style={styles.small}></View>
          <View style={styles.middle}></View>
          <View style={styles.big}></View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  small: {
    flex: 1,
    backgroundColor: 'red',
    // height: 100,
    // width: 100,
  },
  middle: {
    flex: 2,
    backgroundColor: 'green',
    // height: 200,
    // width: 200,
  },
  big: {
    flex: 3,
    backgroundColor: 'blue',
    // height: 340,
    // width: 340,
  },
});



AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
