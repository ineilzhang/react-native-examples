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
 There are two types of data that control a component: props and state.
 props are set by the parent and they are fixed throughout the lifetime of a component.
 For data that is going to change, we have to use state.

 In general, you should initialize state in the constructor, and then call setState when you want to change it.
 */

export default class BlinkApp extends Component{
  render(){
    return(
        <Blink text="haha"></Blink>
    );
  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {
      showText : true,
    };
    // Toggle the state every second
    setInterval(() => {
      this.setState((previousState) =>{
        return {
          showText : !previousState.showText,
        };
      });
    },1000);
  }
  render(){
    let display = this.state.showText ? this.props.text : '';
    return(
        <Text style={styles.textAbout}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textAbout :{
    paddingTop : 100,
    paddingLeft : 100,
  }
});



AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);
