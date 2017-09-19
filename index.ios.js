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
  TextInput,
} from 'react-native';

export default class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }
  render(){
    //login and &&
    let test = ' ' && 'H';
    console.log("neil:test="+test);
    return(
        <View style={{padding: 10}}>
          <TextInput
              style={{height: 40}}
              placeholder="Type here to translate."
              onChangeText={(text) => {
                this.setState(
                    {text}
                );
              }}
          />
          <Text style={{padding: 10, fontSize: 40}}>
            {/*
             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
            */}
            {this.state.text.split(' ').map((word) => word && 'H').join('&')}
          </Text>
        </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
