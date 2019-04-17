import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import MainView from './components/MainView';
import Translator from './components/Translator';
import PickLang from './components/LanguagePicker';

import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <PickLang />

        <MainView />

        <Text style={styles.paragraph}>
          English -> Spanish Translation
        </Text>

        <Translator />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    margin: 1,
    height: 12,

  },
});
