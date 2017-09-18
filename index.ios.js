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
        <View style={{paddingTop: 100}}>
          <Text style={styles.bigBlue}>bigBlue</Text>
          <Text style={styles.smallGreen}>smallGreen</Text>
          <Text style={styles.bigBule,styles.smallGreen}>bigBlue,smallGreen</Text>
          <Text style={styles.smallGreen,styles.bigBlue}>smallGreen,bigBlue</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  bigBlue : {
    backgroundColor : 'black',
    color : 'blue',
    fontSize : 50,
    fontWeight : 'bold',
  },
  smallGreen : {
    color : 'green',
  },
});



AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
