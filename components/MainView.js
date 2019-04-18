import * as React from 'react';
import { Text, View, StyleSheet, Image, Picker } from 'react-native';
import Country from './Country'
import Translator from './Translator'
import data from '../resources/flags.json';

export default class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: data[Object.keys(data)[0]], selected: "EN-ES" }
  }

  onLanguageSelected = (k, i) => {
    console.log(k, i);
    this.setState({ language: data[k] , selected: k});
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selected}
          onValueChange={this.onLanguageSelected}>
          {Object.keys(data).map(k => <Picker.Item label={k} value={k} key={k} />)}
        </Picker>
        <Country from={this.state.language.image_from} to={this.state.language.image_to} />
        <Text style={styles.paragraph}>
          {this.state.language.title}
        </Text>
        <Translator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 2,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
