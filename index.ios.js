// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
//

//The FlatList component displays a scrolling list of changing, but similarly structured, data.
//FlatList works well for long lists of data, where the number of items might change over time.
//Unlike the more generic ScrollView, the FlatList only renders elements that are currently showing on the screen,
//not all the elements at once.

// export default class FlatListBasics extends Component {
//   render() {
/*
 The FlatList component requires two props: data and renderItem.
 data is the source of information for the list.
 renderItem takes one item from the source and returns a formatted component to render.
*/
//     return (
//         <View style={styles.container}>
//   <FlatList
//     data={[
//       {key: 'Deving'},
//       {key: 'Jacksonwt'},
//       {key: 'Jamestew'},
//       {key: 'Joeltwe'},
//       {key: 'Johntew'},
//       {key: 'Jillianwtee'},
//       {key: 'Jimmywer'},
//       {key: 'Julierete'},
//       {key: 'Jackson1'},
//       {key: 'Jameseree'},
//       {key: 'Joel1'},
//       {key: 'John2'},
//       {key: 'Jillian32'},
//       {key: 'Jimmy23'},
//       {key: 'Julie24'},
//       {key: 'Jackson43'},
//       {key: 'James234'},
//       {key: 'Joel35'},
//       {key: 'John235'},
//       {key: 'Jillian535'},
//       {key: 'Jimmy23dfdfs'},
//       {key: 'Julie35'},
//       {key: 'Jackson235'},
//       {key: 'James53'},
//       {key: 'Joel634'},
//       {key: 'John346'},
//       {key: 'Jillian646'},
//       {key: 'Jimmy64'},
//       {key: 'Julie646'},
//   ]}
//     renderItem={
//       ({item}) =>
//           <TouchableOpacity onPress={this._onPressButton}>
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>{item.key}</Text>
//             </View>
//           </TouchableOpacity>
//     }
//   />
//   </View>
//   );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   button: {
//     marginBottom: 2,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);


import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
        <View style={styles.container}>
          <SectionList
              sections={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);