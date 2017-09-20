import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with { params.user }</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat',{ user: 'I am home.'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return <Button
      onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
      title="Chat with Lucy"
    />
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Button
      onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
      title="Chat with Lucy"
    />
  }
}


// export default class NavigatorWrappingScreen extends React.Component {
//   render() {
//     console.log("logggggggg");
//     return (
//       <View>
//         <MainScreenNavigator navigation={this.props.navigation}/>
//       </View>
//     );
//   }
// }
// NavigatorWrappingScreen.router = MainScreenNavigator.router;



const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
   },
  Chat: { screen: ChatScreen },
});

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('AwesomeProject', () => SimpleApp);
