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
  TouchableHighlight,
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props){
    super(props);
    this.state = {responseJsonText: ''};
  }
  _onPressButton(){
    return this._getMoviesFromApiAsync;
  }
  // 在ES5下，React.createClass会把所有的方法都bind一遍，这样可以提交到任意的地方作为回调函数，而this不会变化。
  // 在ES6下，你需要通过bind来绑定this引用，或者使用箭头函数（它会绑定当前scope的this引用）来调用
  _getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("neil:"+responseJson.title);
          this.setState({
            responseJsonText: responseJson.title,
          });
        })
        .catch((error) => {
          console.error(error);
        });
  }
  async _getTitleFromApi() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      this.setState({
        responseJsonText: responseJson.title,
      });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      // 箭头函数实际上是在这里定义了一个临时的函数，
      // 箭头函数的箭头=>之前是一个空括号、单个的参数名、或用括号括起的多个参数名，
      // 而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过return来返回值，否则返回的是undefined）。
      // 需要注意的是，不论是bind还是箭头函数，每次被执行都返回的是一个新的函数引用，
      // 因此如果你还需要函数的引用去做一些别的事情（譬如卸载监听器），那么你必须自己保存这个引用.
        <TouchableHighlight
          onPress={this._getTitleFromApi.bind(this)}
          // onPress={() => this._getMoviesFromApiAsync()}
          underlayColor="white" style={{paddingTop: 22}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{!this.state.responseJsonText ? "Press Me" : this.state.responseJsonText}</Text>
          </View>
        </TouchableHighlight>
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
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
  jsonText: {
    paddingTop: 140,
    color: 'red',
    backgroundColor: '#F5FCFF',

  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
