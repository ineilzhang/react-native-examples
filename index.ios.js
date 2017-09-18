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
  View
} from 'react-native';

/*
 在ES5里，要导出一个类给别的模块用，一般通过module.exports来导出

 //ES5
 var MyComponent = React.createClass({
 ...
 });

 module.exports = MyComponent;

 在ES6里，通常用export default来实现相同的功能：

 //ES6
 export default class MyComponent extends Component{
 ...
 }

 引用的时候也类似：

 //ES5
 var MyComponent = require('./MyComponent');

 //ES6
 import MyComponent from './MyComponent';
 注意导入和导出的写法必须配套，不能混用！
 */

export default class AwesomeProject extends Component {

  /*
   给组件定义方法

   给组件定义方法不再用 名字: function() 的写法，而是直接用 方法名() ，在方法的最后也不能有逗号了。

   //ES5
   var Photo = React.createClass({
   componentWillMount: function(){

   },
   render: function() {
   return (
   <Image source={this.props.source} />
   );
   },
   });
   //ES6
   class Photo extends React.Component {
   componentWillMount() {

   }
   render() {
   return (
   <Image source={this.props.source} />
   );
   }
   }
   */


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
