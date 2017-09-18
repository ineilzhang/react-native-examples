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
一个 module 只能导出一个组件。
Most components can be customized when they are created, with different parameters.
These creation parameters are called props.
For example, one basic React Native component is the Image.
When you create an image, you can use a prop named source to control what image it shows.
*/

export default class Bananas extends Component{
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={styles.bananaLocation}>
          {/*
           Using name as a prop lets us customize the Greeting component, so we can reuse that component for each of our greetings.
           This example also uses the Greeting component in JSX, just like the built-in components.
          */}
          <BananaText name={"bananas"}></BananaText>
          {/*
           Notice that {pic} is surrounded by braces, to embed the variable pic into JSX.
           You can put any JavaScript expression inside braces in JSX.
          */}
          <Image source={pic} style={styles.bananaPicSize}></Image>
        </View>
    );
  }
}

class BananaText extends Component{
  render(){
    return(
        <Text>Those are {this.props.name}</Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bananaPicSize: {
    width: 200,
    height: 200,
  },
  bananaLocation:{
    alignItems: 'center',
    paddingTop: 100,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Bananas);
