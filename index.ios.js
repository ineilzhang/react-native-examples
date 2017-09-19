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

 */

export default class BlinkApp extends Component{
  render(){
    return(
        //flex‘s priority is bigger than height or width
        <View style={styles.container}>
          <View style={styles.small}></View>
          <View style={styles.middle}></View>
          <View style={styles.big}></View>
        </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    // paddingTop: 24,
    top: 24,
    flex: 1,
    flexDirection: 'column',
    //Available options are flex-start, center, flex-end, space-around, and space-between.
    justifyContent: 'flex-start',
    //Available options are flex-start, center, flex-end, and stretch.
    alignItems: 'flex-start',
    //more: https://facebook.github.io/react-native/docs/layout-props.html
  },
  small: {
    // flex: 1,
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  middle: {
    // flex: 2,
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  big: {
    // flex: 3,
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});



AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
