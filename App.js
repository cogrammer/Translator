import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import MainView from './components/MainView';
import Country from './components/Country';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
          <MainView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
