
{/*import React, { Component } from 'react';*/}
{/*import {*/}
  {/*AppRegistry,*/}
  {/*StyleSheet,*/}
  {/*Text,*/}
  {/*View,*/}
  {/*Button,*/}
  {/*Alert,*/}
{/*} from 'react-native';*/}

{/*export default class ButtonBasics extends Component {*/}
  {/*_onPressButton(prop){*/}
    {/*Alert.alert("You tap the button."+prop);*/}
  {/*}*/}
  {/*render(){*/}
    {/*return(*/}
        {/*<View style={styles.container}>*/}
          {/*<View style={styles.buttonContainer}>*/}
            {/*<Button*/}
                {/*onPress={this._onPressButton}*/}
                {/*title="Press me."*/}
            {/*>*/}
            {/*</Button>*/}
          {/*</View>*/}
          {/*<View style={styles.buttonContainer}>*/}
            {/*<Button*/}
                {/*onPress={this._onPressButton}*/}
                {/*title="Press me."*/}
                {/*color="#841584"*/}
            {/*>*/}
            {/*</Button>*/}
          {/*</View>*/}
          {/*<View style={styles.alternativeLayoutButtonContainer}>*/}
            {/*<Button*/}
                {/*onPress={this._onPressButton}*/}
                {/*title="one"*/}
            {/*>*/}
            {/*</Button>*/}
            {/*<Button*/}
                {/*onPress={this._onPressButton}*/}
                {/*title="two"*/}
                {/*color="#841584"*/}
            {/*>*/}
            {/*</Button>*/}
          {/*</View>*/}
        {/*</View>*/}
    {/*);*/}
  {/*}*/}
{/*}*/}

{/*const styles = StyleSheet.create({*/}
  {/*container: {*/}
    {/*// flex: 1,*/}
    {/*// justifyContent: 'center',*/}
    {/*// alignItems: 'center',*/}
    {/*// backgroundColor: '#F5FCFF',*/}
  {/*},*/}
  {/*buttonContainer: {*/}
    {/*margin: 20,*/}
  {/*},*/}
  {/*alternativeLayoutButtonContainer: {*/}
    {/*margin: 20,*/}
    {/*flexDirection: 'row',*/}
    {/*justifyContent: 'space-between',*/}
  {/*},*/}
{/*});*/}

{/*AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);*/}

import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this._onPressButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          {/*<TouchableNativeFeedback*/}
              {/*onPress={this._onPressButton}*/}
              {/*background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>*/}
            {/*<View style={styles.button}>*/}
              {/*<Text style={styles.buttonText}>TouchableNativeFeedback</Text>*/}
            {/*</View>*/}
          {/*</TouchableNativeFeedback>*/}
          <TouchableWithoutFeedback
              onPress={this._onPressButton}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
              <Text adjustsFontSizeToFit={false} style={styles.buttonText}>Touchable with Long Press</Text>
            </View>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 160,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    height: 60,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);